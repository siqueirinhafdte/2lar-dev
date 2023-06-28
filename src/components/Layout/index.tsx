import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { footerData, menuData } from '__sitedata__';
import { elasticSearch } from 'config';
import { useRouter } from 'next/router';
import { authService } from 'services/authService';
import { tokenService } from 'services/tokenService';
import { MenuAnchor, project } from 'shared/enum';
import { useResponsive } from 'shared/hooks';
import { AppState } from 'store';
import { resetUser, setBasicInfosUser } from 'store/slices/user';
import { Footer, Header, MainContent } from 'stories/components';
import { InputSearchElasticProps } from 'stories/components/ElasticSearch/InputSearchElastic/types';
import { Logger } from 'utils';
import { getVisualControlHeaderByPage } from 'utils/layout';

import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const email = useSelector((store: AppState) => store.user.email);
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const propsInputSearch: InputSearchElasticProps = {
    placeholder: 'Escolha uma localização',
    searchKey: elasticSearch.searchKey,
    engineName: elasticSearch.engineName,
    endpointBase: elasticSearch.endpointBase,
    onChange: (item) => {
      router.push(`/search/${item?.text}`);
    }
  };

  const menuSelected = useMemo(() => {
    return menuData.map((item) => {
      const isActive = router.asPath === item.redirectLink;
      return {
        ...item,
        isSelected: isActive
      };
    });
  }, [router.asPath]);

  const menu = useMemo(() => {
    return {
      anchor: MenuAnchor.right,
      menuItems: menuSelected,
      urlImgLogo: project.urlImgLogo
    };
  }, [menuSelected]);

  const { showComponent, color: colorHeader } = useMemo(() => {
    return getVisualControlHeaderByPage(router.pathname ?? '', isMobile);
  }, [router.pathname, isMobile]);

  const logout = useCallback(() => {
    authService
      .logOff()
      .then(() => {
        tokenService.delete();
        dispatch(resetUser());
      })
      .catch((error) => Logger.info({ error }));
  }, [dispatch]);

  useEffect(() => {
    authService
      .getSession()
      .then((resp) => {
        dispatch(setBasicInfosUser({ email: String(resp?.email) }));
      })
      .catch(() => {
        dispatch(resetUser());
      });
  }, [dispatch]);

  return (
    <>
      <Header
        urlImgLogo={project.urlImgLogo}
        urlImgLogoDarkBg={project.urlImgLogoDarkBg}
        menu={menu}
        links={menuSelected}
        button={{
          label: 'Entrar',
          onClick: function (): void {
            router.push('/login');
          }
        }}
        username={email}
        logout={logout}
        showComponent={showComponent}
        color={colorHeader}
        search={propsInputSearch}
      />
      <MainContent>{children}</MainContent>
      <Footer
        navLinks={footerData.navLinks}
        urlImg={project.urlImgLogoIcon}
        textLogo={footerData.textLogo}
        horizontalLinks={footerData.horizontalLinks}
        button={{
          label: 'Encontrar meu imóvel',
          onClick: () => {
            router.push('/listings');
          }
        }}
      />
    </>
  );
};

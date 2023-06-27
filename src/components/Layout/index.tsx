import { useMemo } from 'react';

import { footerData, menuData } from '__sitedata__';
import { elasticSearch } from 'config';
import { useRouter } from 'next/router';
import { MenuAnchor, project } from 'shared/enum';
import { useResponsive } from 'shared/hooks';
import { Footer, Header, MainContent } from 'stories/components';
import { InputSearchElasticProps } from 'stories/components/ElasticSearch/InputSearchElastic/types';
import { getVisualControlHeaderByPage } from 'utils/layout';

import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

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

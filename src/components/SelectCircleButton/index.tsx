import * as S from './styles';
import { SelectCircleButtonProps } from './types';

export const SelectCircleButton = ({
  options,
  onChange,
  color,
  value,
  valueText,
  showValuesSelected = 'only-one',
  className
}: SelectCircleButtonProps) => {
  return (
    <S.Wrapper className={className}>
      {options.map((option, index, arr) => {
        const selectedIndex = arr.findIndex((item) => {
          if (item.value === value) {
            return true;
          }

          return item.valueText && valueText && item.valueText === valueText;
        });
        let isSelected = false;

        if (selectedIndex >= 0) {
          if (showValuesSelected === 'only-one') {
            isSelected = option.value === value;
          } else {
            isSelected = index <= selectedIndex;
          }
        }

        return (
          <S.ButtonOption
            key={option.label}
            onClick={() => onChange(option.value)}
            color={color}
            isSelected={isSelected}
          >
            {option.label}
          </S.ButtonOption>
        );
      })}
    </S.Wrapper>
  );
};

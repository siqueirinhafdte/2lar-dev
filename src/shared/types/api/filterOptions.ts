export interface PayloadFilterOptions {
  categories?: string[];
  requiredOptions?: string[];
}

export interface FilterOptions {
  locations: ConfigFilterOption[];
  attributes: ConfigFilterOption[];
  amenities: ConfigFilterOption[];
}

type ConfigFilterOption = {
  field: string;
  label: string;
  type: 'value' | 'range';
  ranges?: Range[];
};

type Range = {
  from: number;
  to?: number;
  name: string;
};

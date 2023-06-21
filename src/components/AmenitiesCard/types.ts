export interface AmenityCardProps {
  icon?: string;
  name: string;
  label: string;
  description?: string;
  type?: string;
}

export interface AmenitiesProps {
  amenities: AmenityCardProps[];
}

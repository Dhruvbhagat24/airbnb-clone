export interface AmenityModalItem {
  id: string;
  name: string;
  icon: string;
  available: boolean;
  description?: string;
}

export interface AmenityGroup {
  category: string;
  items: AmenityModalItem[];
}

export const allAmenitiesData: AmenityGroup[] = [
  {
    category: 'Bathroom',
    items: [
      { id: 'b1', name: 'Hairdryer', icon: 'hairdryer', available: true },
      { id: 'b2', name: 'Cleaning products', icon: 'cleaning-products', available: true },
      { id: 'b3', name: 'Shampoo', icon: 'shampoo', available: true },
      { id: 'b4', name: 'Hot water', icon: 'hot-water', available: true },
      { id: 'b5', name: 'Shower gel', icon: 'shower-gel', available: true },
    ],
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { id: 'bl1', name: 'Washing machine', icon: 'washer', available: true },
      { id: 'bl2', name: 'Hangers', icon: 'hangers', available: true },
      { id: 'bl3', name: 'Bed linen', icon: 'bed-linen', available: true, description: 'Cotton linen' },
      { id: 'bl4', name: 'Room-darkening blinds', icon: 'blinds', available: true },
      { id: 'bl5', name: 'Iron', icon: 'iron', available: true },
      { id: 'bl6', name: 'Clothes drying rack', icon: 'drying-rack', available: true },
      { id: 'bl7', name: 'Clothes storage: wardrobe', icon: 'clothes-storage', available: true },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { id: 'e1', name: 'TV', icon: 'tv', available: true, description: '65" HDTV with standard cable, Netflix' },
      { id: 'e2', name: 'Exercise equipment', icon: 'exercise-equipment', available: true },
    ],
  },
  {
    category: 'Family',
    items: [
      { id: 'f1', name: 'Cot – available upon request', icon: 'cot', available: true },
    ],
  },
  {
    category: 'Heating and cooling',
    items: [
      { id: 'hc1', name: 'Air conditioning', icon: 'ac', available: true },
      { id: 'hc2', name: 'Ceiling fan', icon: 'ceiling-fan', available: true },
      { id: 'hc3', name: 'Heating', icon: 'heating', available: true },
    ],
  },
  {
    category: 'Home safety',
    items: [
      { id: 'hs1', name: 'Exterior security cameras on property', icon: 'camera', available: true },
      { id: 'hs2', name: 'Fire extinguisher', icon: 'fire-extinguisher', available: true },
      { id: 'hs3', name: 'First aid kit', icon: 'first-aid', available: true },
    ],
  },
  {
    category: 'Internet and office',
    items: [
      { id: 'io1', name: 'Wifi', icon: 'wifi', available: true },
      { id: 'io2', name: 'Dedicated workspace', icon: 'workspace', available: true },
    ],
  },
  {
    category: 'Kitchen and dining',
    items: [
      { id: 'kd1', name: 'Kitchen', icon: 'kitchen', available: true },
      { id: 'kd2', name: 'Fridge', icon: 'fridge', available: true },
      { id: 'kd3', name: 'Microwave', icon: 'microwave', available: true },
      { id: 'kd4', name: 'Cooking basics', icon: 'cooking-basics', available: true },
      { id: 'kd5', name: 'Crockery and cutlery', icon: 'crockery', available: true },
      { id: 'kd6', name: 'Freezer', icon: 'freezer', available: true },
      { id: 'kd7', name: 'Cooker', icon: 'cooker', available: true },
      { id: 'kd8', name: 'Kettle', icon: 'kettle', available: true },
      { id: 'kd9', name: 'Wine glasses', icon: 'wine-glasses', available: true },
      { id: 'kd10', name: 'Toaster', icon: 'toaster', available: true },
      { id: 'kd11', name: 'Blender', icon: 'blender', available: true },
      { id: 'kd12', name: 'Dining table', icon: 'dining-table', available: true },
      { id: 'kd13', name: 'Coffee', icon: 'coffee', available: true },
    ],
  },
  {
    category: 'Location features',
    items: [
      { id: 'lf1', name: 'Private entrance', icon: 'private-entrance', available: true },
    ],
  },
  {
    category: 'Outdoor',
    items: [
      { id: 'od1', name: 'Back garden', icon: 'back-garden', available: true },
      { id: 'od2', name: 'Outdoor dining area', icon: 'outdoor-dining', available: true },
    ],
  },
  {
    category: 'Parking and facilities',
    items: [
      { id: 'pf1', name: 'Free parking on premises', icon: 'parking', available: true },
      { id: 'pf2', name: 'Pool', icon: 'pool', available: true },
      { id: 'pf3', name: 'Hot tub', icon: 'hottub', available: true },
      { id: 'pf4', name: 'Lift', icon: 'lift', available: true },
      { id: 'pf5', name: 'Shared gym in building', icon: 'shared-gym', available: true },
    ],
  },
  {
    category: 'Services',
    items: [
      { id: 's1', name: 'Pets allowed', icon: 'pets', available: true },
      { id: 's2', name: 'Luggage drop-off allowed', icon: 'luggage', available: true },
      { id: 's3', name: 'Long-term stays allowed', icon: 'long-term', available: true },
      { id: 's4', name: 'Self check-in', icon: 'self-checkin', available: true },
      { id: 's5', name: 'Building staff', icon: 'building-staff', available: true },
      { id: 's6', name: 'Cleaning available during stay', icon: 'cleaning-service', available: true },
    ],
  },
  {
    category: 'Not included',
    items: [
      { id: 'ni1', name: 'Tumble dryer', icon: 'dryer-off', available: false },
      { id: 'ni2', name: 'Essentials', icon: 'essentials-off', available: false },
      { id: 'ni3', name: 'Smoke alarm', icon: 'smoke-alarm-off', available: false },
      { id: 'ni4', name: 'Carbon monoxide alarm', icon: 'carbon-monoxide-alarm-off', available: false },
    ],
  },
];

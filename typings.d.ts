interface Category {
    organization_id: string;
    name: string;
    position: number | null;
    category_type: string;
    description: string;
    last_updated: string;
    id: string;
    parent_id: string | null;
    url_slug: string | null;
    is_deleted: boolean;
    date_created: string;
    subcategories: any[];
    parents: any[];
  }
  
  interface Photo {
    model_name: string;
    model_id: string;
    organization_id: string;
    filename: string;
    url: string;
    is_featured: boolean;
    save_as_jpg: boolean;
    is_public: boolean;
    file_rename: boolean;
    position: number;
  }
  
  interface Price {
    NGN: [number, null, any[]];
  }
  
  interface Item {
    name: string;
    description: string;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    previous_url_slugs: string | null;
    unavailable: boolean;
    unavailable_start: string | null;
    unavailable_end: string | null;
    id: string;
    parent_product_id: string | null;
    parent: string | null;
    organization_id: string;
    product_image: any[];
    categories: Category[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    current_price: Price[];
    is_deleted: boolean;
    available_quantity: number;
    selling_price: number | null;
    discounted_price: number | null;
    buying_price: number | null;
    extra_infos: any;
  }
  
  interface Collections {
    page: number;
    size: number;
    total: number;
    debug: any | null;
    previous_page: any | null;
    next_page: any | null;
    items: Item[];
  }

  interface Collection {
    name: string;
    description: string;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    previous_url_slugs: string | null;
    unavailable: boolean;
    unavailable_start: string | null;
    unavailable_end: string | null;
    id: string;
    parent_product_id: string | null;
    parent: string | null;
    organization_id: string;
    product_image: any[];
    categories: Category[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    current_price: number;
    is_deleted: boolean;
    available_quantity: number;
    selling_price: number | null;
    discounted_price: number | null;
    buying_price: number | null;
    extra_infos: any;
    quantity: number;
  }
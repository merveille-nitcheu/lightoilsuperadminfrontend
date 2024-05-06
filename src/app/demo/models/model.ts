export interface Compagnie {
    id?: number;
    address?: string;
    name?: string;
    phone?: string;
    logo?: string;
    website?: string;
    start_date?: Date;
    expected_end_date?: Date;
    financialYear:any
}

export interface StationService{
    id?: number;
    city?: string;
    gmt?: string;
    latitude?: string;
    longitude?: string;
    name?: string;
    description?: string;
    status?: string;
    back_image_link?: string;
    created_at?: string;

}

export interface Tank{
    id?: number;
    abacus?: string;
    diameter?: string;
    liquid_type?: string;
    man_hole_height?: string;
    sensor_depth?: string;
    sensor_reference?: string;
    type_jauge?:any
    name_ss?:any
    name_product?:any

}


export interface Product{
    id?: number;
    name?: string;
    code:string
    price?: number;
    nbserviceStations?: any
    serviceStations?:any

}

export interface Jauge{
    id?: number;
    name?: string;
    price?: number;
    nbserviceStations?: any
    serviceStations?:any


}


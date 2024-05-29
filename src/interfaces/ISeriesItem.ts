import { Attribute, SafetyRating, Lock, Guarantee } from "./Attribute";

export interface ISeriesItem {
    id: number;
    title: string;
    min_price: number;
    image: string;
    description: string;
    thickness: Attribute;
    sound_absorption: Attribute;
    safety_rating: SafetyRating;
    locking_points: Attribute;
    guarantee: Guarantee;
    locks: Lock;
    location?: string;
}
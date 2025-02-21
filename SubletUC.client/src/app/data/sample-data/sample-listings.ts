import { Listing } from "../../data/listing";
import { Gender } from "../../data/enum/gender";

export class SampleListings {
    static listings: Listing[] = [
        {
            listingId: 1,
            address: '4567 W. McMillan St.',
            rent: 550,
            availability: 'Available Now',
            bedrooms: 3,
            bathrooms: 2,
            description: 'Spacious house with great amenities.',
            utilitiesIncludedInRent: true,
            averageutilities: 50,
            roommates: [
                { year: 2026, Gender: Gender.Male },
                { year: 2025, Gender: Gender.Female },
                { year: 2024, Gender: Gender.NonBinary }
            ],
            sharedRoom: false,
            sharedRoommates: 0,
            catsAndDogsAllowed: true,
            washerDryer: true,
            offStreetParking: true,
            driveway: true,
            distanceFromCampus: 0.5,
            notes: '',
            photo: undefined,
            deleted: false,
            userId: 0
        },
        {
            listingId: 2,
            address: '1234 University Ave.',
            rent: 700,
            availability: 'Available in December',
            bedrooms: 2,
            bathrooms: 1,
            description: 'Cozy apartment near campus.',
            utilitiesIncludedInRent: false,
            averageutilities: 75,
            roommates: [{ year: 2027, Gender: Gender.Male }],
            sharedRoom: true,
            sharedRoommates: 1,
            catsAndDogsAllowed: false,
            washerDryer: true,
            offStreetParking: false,
            driveway: false,
            distanceFromCampus: 0.2,
            notes: 'No pets allowed',
            photo: undefined,
            deleted: false,
            userId: 1
        }
    ];

    static getAllListings(): Listing[] {
        return this.listings;
    }
}

import { gql } from '@apollo/client';

export const getAllRestaurant = gql`
{
    search(location: "San Jose, CA 95127") {
        total
        business {
          name
        }
      }
}

`;
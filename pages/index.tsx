import { GetServerSideProps } from "next";
import axios from "axios";
import { AsteroidsData, TAsteroids } from "../src/types/TAsteroids";
import {AsteroidsList} from "../src/components/AsteroidsList/ui/AsteroidList/AsteroidsList";

export default function Home({ asteroids }: AsteroidProps) {
  return <>
    <AsteroidsList asteroids={asteroids} />
  </>;
}

const mockData = {
  "links": {
    "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-11&end_date=2023-08-11&detailed=false&api_key=DEMO_KEY",
    "prev": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-09&end_date=2023-08-09&detailed=false&api_key=DEMO_KEY",
    "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-10&end_date=2023-08-10&detailed=false&api_key=DEMO_KEY"
  },
  "element_count": 6,
  "near_earth_objects": {
    "2023-08-10": [
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3467060?api_key=DEMO_KEY"
        },
        "id": "3467060",
        "neo_reference_id": "3467060",
        "name": "(2009 RM)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3467060",
        "absolute_magnitude_h": 18.26,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.5923180627,
            "estimated_diameter_max": 1.3244634524
          },
          "meters": {
            "estimated_diameter_min": 592.318062676,
            "estimated_diameter_max": 1324.4634524446
          },
          "miles": {
            "estimated_diameter_min": 0.3680492669,
            "estimated_diameter_max": 0.8229831799
          },
          "feet": {
            "estimated_diameter_min": 1943.3007927501,
            "estimated_diameter_max": 4345.3526733184
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 19:40",
            "epoch_date_close_approach": 1691696400000,
            "relative_velocity": {
              "kilometers_per_second": "6.1668176387",
              "kilometers_per_hour": "22200.5434994847",
              "miles_per_hour": "13794.5543761104"
            },
            "miss_distance": {
              "astronomical": "0.2877682134",
              "lunar": "111.9418350126",
              "kilometers": "43049511.778345458",
              "miles": "26749726.2177770004"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3837905?api_key=DEMO_KEY"
        },
        "id": "3837905",
        "neo_reference_id": "3837905",
        "name": "(2019 AH13)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837905",
        "absolute_magnitude_h": 26.0,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0167708462,
            "estimated_diameter_max": 0.0375007522
          },
          "meters": {
            "estimated_diameter_min": 16.7708462163,
            "estimated_diameter_max": 37.5007521798
          },
          "miles": {
            "estimated_diameter_min": 0.0104209175,
            "estimated_diameter_max": 0.0233018799
          },
          "feet": {
            "estimated_diameter_min": 55.0224631002,
            "estimated_diameter_max": 123.0339677816
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 12:59",
            "epoch_date_close_approach": 1691672340000,
            "relative_velocity": {
              "kilometers_per_second": "5.4105689263",
              "kilometers_per_hour": "19478.0481347197",
              "miles_per_hour": "12102.9016312651"
            },
            "miss_distance": {
              "astronomical": "0.3074573118",
              "lunar": "119.6008942902",
              "kilometers": "45994958.961205866",
              "miles": "28579942.2289623108"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/54053852?api_key=DEMO_KEY"
        },
        "id": "54053852",
        "neo_reference_id": "54053852",
        "name": "(2020 RW2)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54053852",
        "absolute_magnitude_h": 22.8,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0732073989,
            "estimated_diameter_max": 0.1636967205
          },
          "meters": {
            "estimated_diameter_min": 73.2073989347,
            "estimated_diameter_max": 163.696720474
          },
          "miles": {
            "estimated_diameter_min": 0.0454889547,
            "estimated_diameter_max": 0.1017163949
          },
          "feet": {
            "estimated_diameter_min": 240.181762721,
            "estimated_diameter_max": 537.0627483999
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 07:59",
            "epoch_date_close_approach": 1691654340000,
            "relative_velocity": {
              "kilometers_per_second": "5.1046005741",
              "kilometers_per_hour": "18376.5620668254",
              "miles_per_hour": "11418.481024245"
            },
            "miss_distance": {
              "astronomical": "0.434866647",
              "lunar": "169.163125683",
              "kilometers": "65055124.12524189",
              "miles": "40423379.674402482"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/54138308?api_key=DEMO_KEY"
        },
        "id": "54138308",
        "neo_reference_id": "54138308",
        "name": "(2021 GR18)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54138308",
        "absolute_magnitude_h": 22.95,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0683211199,
            "estimated_diameter_max": 0.1527706684
          },
          "meters": {
            "estimated_diameter_min": 68.321119906,
            "estimated_diameter_max": 152.7706684087
          },
          "miles": {
            "estimated_diameter_min": 0.0424527626,
            "estimated_diameter_max": 0.094927263
          },
          "feet": {
            "estimated_diameter_min": 224.1506630324,
            "estimated_diameter_max": 501.2161197421
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 10:33",
            "epoch_date_close_approach": 1691663580000,
            "relative_velocity": {
              "kilometers_per_second": "9.5916590214",
              "kilometers_per_hour": "34529.972477216",
              "miles_per_hour": "21455.582065079"
            },
            "miss_distance": {
              "astronomical": "0.1088169728",
              "lunar": "42.3298024192",
              "kilometers": "16278787.350727936",
              "miles": "10115169.4131040768"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/54290859?api_key=DEMO_KEY"
        },
        "id": "54290859",
        "neo_reference_id": "54290859",
        "name": "(2022 OQ)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54290859",
        "absolute_magnitude_h": 24.92,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0275775053,
            "estimated_diameter_max": 0.0616651765
          },
          "meters": {
            "estimated_diameter_min": 27.5775052924,
            "estimated_diameter_max": 61.6651764838
          },
          "miles": {
            "estimated_diameter_min": 0.017135862,
            "estimated_diameter_max": 0.0383169524
          },
          "feet": {
            "estimated_diameter_min": 90.4773824637,
            "estimated_diameter_max": 202.313577615
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 13:32",
            "epoch_date_close_approach": 1691674320000,
            "relative_velocity": {
              "kilometers_per_second": "5.9451153003",
              "kilometers_per_hour": "21402.4150809797",
              "miles_per_hour": "13298.6284151787"
            },
            "miss_distance": {
              "astronomical": "0.1986539899",
              "lunar": "77.2764020711",
              "kilometers": "29718213.756041513",
              "miles": "18466041.7462703594"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/54376874?api_key=DEMO_KEY"
        },
        "id": "54376874",
        "neo_reference_id": "54376874",
        "name": "(2023 PO)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54376874",
        "absolute_magnitude_h": 25.81,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.018304378,
            "estimated_diameter_max": 0.0409298336
          },
          "meters": {
            "estimated_diameter_min": 18.3043780368,
            "estimated_diameter_max": 40.9298335762
          },
          "miles": {
            "estimated_diameter_min": 0.0113738097,
            "estimated_diameter_max": 0.0254326116
          },
          "feet": {
            "estimated_diameter_min": 60.0537356384,
            "estimated_diameter_max": 134.2842351902
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2023-08-10",
            "close_approach_date_full": "2023-Aug-10 10:03",
            "epoch_date_close_approach": 1691661780000,
            "relative_velocity": {
              "kilometers_per_second": "7.9728822505",
              "kilometers_per_hour": "28702.3761016211",
              "miles_per_hour": "17834.5403060323"
            },
            "miss_distance": {
              "astronomical": "0.0376238648",
              "lunar": "14.6356834072",
              "kilometers": "5628450.035247976",
              "miles": "3497356.6773190288"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      }
    ]
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // const { data: asteroids } = await axios.get<AsteroidsData>(
    //   `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-08&end_date=2023-08-10&api_key=${
    //     process.env.API_KEY || "DEMO_KEY"
    //   }`
    // );
    // return {
    //   props: {
    //     asteroids: asteroids.near_earth_objects,
    //   },
    // };
    return {
      props: {
        asteroids: mockData.near_earth_objects,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        asteroids: [],
      },
    };
  }
};
interface AsteroidProps extends Record<string, unknown> {
  asteroids: TAsteroids;
}

export class PsychologicalDistressService {
  getEstimateFor({group, sex}) {
    return psychologicalData.find((datum) => datum.group === group)[sex]
  }

  getHazardousDrinkerEstimateFor({group, sex}) {
    return alcoholData.find((datum) => datum.group === group)[sex]
  }
}

const psychologicalData = [
 {
   "group": "Total",
   "total": 7.6,
   "male": 6.4,
   "female": 8.7,
   "estimated_people": 290000
 },
 {
   "group": "15-24",
   "total": 11.8,
   "male": 8.6,
   "female": 15.3,
   "estimated_people": 79000
 },
 {
   "group": "25-34",
   "total": 8.8,
   "male": 7.9,
   "female": 9.7,
   "estimated_people": 59000
 },
 {
   "group": "35-44",
   "total": 6.3,
   "male": 5.9,
   "female": 6.7,
   "estimated_people": 37000
 },
 {
   "group": "45-54",
   "total": 6.7,
   "male": 5.4,
   "female": 8,
   "estimated_people": 43000
 },
 {
   "group": "55-64",
   "total": 6.6,
   "male": 6.3,
   "female": 6.9,
   "estimated_people": 37000
 },
 {
   "group": "65-74",
   "total": 5.4,
   "male": 4.1,
   "female": 6.7,
   "estimated_people": 22000
 },
 {
   "group": "75+",
   "total": 4.3,
   "male": 4.4,
   "female": 4.1,
   "estimated_people": 13000
 },
 {
   "group": "Maori",
   "total": 11.5,
   "male": 8.6,
   "female": 14.2,
   "estimated_people": 57000
 },
 {
   "group": "Pacific",
   "total": 11.8,
   "male": 6,
   "female": 17.2,
   "estimated_people": 27000
 },
 {
   "group": "Asian",
   "total": 5.5,
   "male": 4.9,
   "female": 6.2,
   "estimated_people": 27000
 },
 {
   "group": "European/Other",
   "total": 7.3,
   "male": 6.5,
   "female": 8.2,
   "estimated_people": 215000
 },
 {
   "group": "Quintile 1",
   "total": 4.8,
   "male": 4.8,
   "female": 4.7,
   "estimated_people": 37000
 },
 {
   "group": "Quintile 2",
   "total": 5,
   "male": 3.1,
   "female": 7,
   "estimated_people": 39000
 },
 {
   "group": "Quintile 3",
   "total": 7.2,
   "male": 6.9,
   "female": 7.5,
   "estimated_people": 56000
 },
 {
   "group": "Quintile 4",
   "total": 9.5,
   "male": 8,
   "female": 11,
   "estimated_people": 74000
 },
 {
   "group": "Quintile 5",
   "total": 11.5,
   "male": 9.9,
   "female": 13,
   "estimated_people": 84000
 }
]

const alcoholData = [
 {
   "year": 2016,
   "group": "Total",
   "total": 19.5,
   "male": 27.1,
   "female": 12.4,
   "estimated_people": 748000
 },
 {
   "year": 2016,
   "group": "15-17",
   "total": 7.6,
   "male": 7.7,
   "female": 7.5,
   "estimated_people": 15000
 },
 {
   "year": 2016,
   "group": "18-24",
   "total": 32.9,
   "male": 39.5,
   "female": 25.7,
   "estimated_people": 157000
 },
 {
   "year": 2016,
   "group": "15-24",
   "total": 25.6,
   "male": 30.5,
   "female": 20.3,
   "estimated_people": 172000
 },
 {
   "year": 2016,
   "group": "25-34",
   "total": 26.3,
   "male": 36.9,
   "female": 15.9,
   "estimated_people": 174000
 },
 {
   "year": 2016,
   "group": "35-44",
   "total": 22.2,
   "male": 29.1,
   "female": 15.9,
   "estimated_people": 129000
 },
 {
   "year": 2016,
   "group": "45-54",
   "total": 21,
   "male": 28.3,
   "female": 14.3,
   "estimated_people": 134000
 },
 {
   "year": 2016,
   "group": "55-64",
   "total": 14.8,
   "male": 23.4,
   "female": 6.8,
   "estimated_people": 83000
 },
 {
   "year": 2016,
   "group": "65-74",
   "total": 10.5,
   "male": 17.8,
   "female": 3.6,
   "estimated_people": 43000
 },
 {
   "year": 2016,
   "group": "75+",
   "total": 4.1,
   "male": 7.9,
   "female": 1.2,
   "estimated_people": 13000
 },
 {
   "year": 2016,
   "group": "Maori",
   "total": 33,
   "male": 39,
   "female": 27.6,
   "estimated_people": 162000
 },
 {
   "year": 2016,
   "group": "Pacific",
   "total": 23.4,
   "male": 32.3,
   "female": 15.2,
   "estimated_people": 55000
 },
 {
   "year": 2016,
   "group": "Asian",
   "total": 6.6,
   "male": 9.7,
   "female": 3.2,
   "estimated_people": 32000
 },
 {
   "year": 2016,
   "group": "European/Other",
   "total": 20,
   "male": 28.4,
   "female": 12.2,
   "estimated_people": 587000
 },
 {
   "year": 2016,
   "group": "Quintile 1",
   "total": 16.4,
   "male": 23.5,
   "female": 9.5,
   "estimated_people": 126000
 },
 {
   "year": 2016,
   "group": "Quintile 2",
   "total": 15.4,
   "male": 21.1,
   "female": 9.7,
   "estimated_people": 119000
 },
 {
   "year": 2016,
   "group": "Quintile 3",
   "total": 21.6,
   "male": 29.8,
   "female": 13.8,
   "estimated_people": 168000
 },
 {
   "year": 2016,
   "group": "Quintile 4",
   "total": 21.6,
   "male": 30.2,
   "female": 13.4,
   "estimated_people": 169000
 },
 {
   "year": 2016,
   "group": "Quintile 5",
   "total": 22.9,
   "male": 31.4,
   "female": 15.5,
   "estimated_people": 166000
 }
]
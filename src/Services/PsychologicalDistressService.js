export class PsychologicalDistressService {
  getEstimateFor({group, sex}) {
    return data.find((datum) => datum.group === group)[sex]
  }
}

const data = [
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

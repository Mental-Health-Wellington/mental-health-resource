export class PsychologicalDistressService {
  getEstimateFor({group, sex}) {
    return psychologicalData.find((datum) => datum.group === group)[sex.toLowerCase()]
  }

  getHazardousDrinkerEstimateFor({group, sex}) {
    return alcoholData.find((datum) => datum.group === group)[sex.toLowerCase()]
  }

  getSuicidesPer100000({ ethnicity, sex }) {
    const ethnicitySearch = ethnicity === "Māori" ? "Māori" : "Non-Māori"
    return suicideRates.find((datum) => datum.ethnicity === ethnicitySearch && datum.sex === sex).deaths_per_100000.toFixed(2)
  }

  getFaceToFaceVisitPercentage({ ethnicity, sex, age }) {
    const ageSearch = age !== "75+" ? age.split("-")[1] : age
    const visits = faceToFaceVisits.find((datum) => {
      return datum.sex === sex &&
        datum.age_group.includes(ageSearch) &&
        datum.ethnicity === ethnicity
    }).percentage * 100
    return visits.toFixed(2)
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
   "group": "Māori",
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
   "group": "Māori",
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

const suicideRates = [
 {
   "year": 2015,
   "measure": "Age-standardised suicide rate",
   "sex": "Male",
   "age_group": "Total",
   "ethnicity": "Māori",
   "deaths_per_100000": 25.3
 },
 {
   "year": 2015,
   "measure": "Age-standardised suicide rate",
   "sex": "Female",
   "age_group": "Total",
   "ethnicity": "Māori",
   "deaths_per_100000": 11.5
 },
 {
   "year": 2015,
   "measure": "Age-standardised suicide rate",
   "sex": "Male",
   "age_group": "Total",
   "ethnicity": "Non-Māori",
   "deaths_per_100000": 14.7
 },
 {
   "year": 2015,
   "measure": "Age-standardised suicide rate",
   "sex": "Female",
   "age_group": "Total",
   "ethnicity": "Non-Māori",
   "deaths_per_100000": 4.7
 }
]

const faceToFaceVisits = [
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 3199.4,
   "percentage": 0.031994
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 432.9,
   "percentage": 0.004329
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 2078.2,
   "percentage": 0.020782
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 4572.6,
   "percentage": 0.045726
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 6212.3,
   "percentage": 0.062123
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 4596,
   "percentage": 0.04596
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 4300.8,
   "percentage": 0.043008
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 4197.8,
   "percentage": 0.041978
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 4040.1,
   "percentage": 0.040401
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 3821.5,
   "percentage": 0.038215
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 3307.1,
   "percentage": 0.033071
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 2851.8,
   "percentage": 0.028518
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 2245.2,
   "percentage": 0.022452
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 1779.6,
   "percentage": 0.017796
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 1471.6,
   "percentage": 0.014716
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 1518,
   "percentage": 0.01518
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 7023.1,
   "percentage": 0.070231
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Total",
   "sex": "Total",
   "face_to_face_per_100000": 3382,
   "percentage": 0.03382
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 3447.3,
   "percentage": 0.034473
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 512.3,
   "percentage": 0.005123
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 2860.5,
   "percentage": 0.028605
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 4557.7,
   "percentage": 0.045577
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 5704.6,
   "percentage": 0.057046
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 5015.3,
   "percentage": 0.050153
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 4714.8,
   "percentage": 0.047148
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 4725.6,
   "percentage": 0.047256
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 4583.2,
   "percentage": 0.045832
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 4382.1,
   "percentage": 0.043821
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 3779.4,
   "percentage": 0.037794
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 3097.8,
   "percentage": 0.030978
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 2436.4,
   "percentage": 0.024364
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 1848.5,
   "percentage": 0.018485
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 1403.3,
   "percentage": 0.014033
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 1402.6,
   "percentage": 0.014026
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 2192.36666666667,
   "percentage": 0.021923666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Total",
   "sex": "Male",
   "face_to_face_per_100000": 3640.3,
   "percentage": 0.036403
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 2960.3,
   "percentage": 0.029603
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 349.4,
   "percentage": 0.003494
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 1252.2,
   "percentage": 0.012522
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 4588.2,
   "percentage": 0.045882
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 6748.3,
   "percentage": 0.067483
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 4143.6,
   "percentage": 0.041436
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 3884.8,
   "percentage": 0.038848
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 3703.5,
   "percentage": 0.037035
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 3541.1,
   "percentage": 0.035411
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 3311.8,
   "percentage": 0.033118
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 2875.8,
   "percentage": 0.028758
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 2621.6,
   "percentage": 0.026216
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 2065.8,
   "percentage": 0.020658
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 1714.6,
   "percentage": 0.017146
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 1536.7,
   "percentage": 0.015367
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 1625.2,
   "percentage": 0.016252
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 2447.96666666667,
   "percentage": 0.024479666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Total",
   "sex": "Female",
   "face_to_face_per_100000": 3131,
   "percentage": 0.03131
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 5471.5,
   "percentage": 0.054715
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 422,
   "percentage": 0.00422
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 2052,
   "percentage": 0.02052
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 6296.4,
   "percentage": 0.062964
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 8292.1,
   "percentage": 0.082921
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 7679,
   "percentage": 0.07679
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 8691.1,
   "percentage": 0.086911
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 8802.7,
   "percentage": 0.088027
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 8462.3,
   "percentage": 0.084623
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 7787.7,
   "percentage": 0.077877
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 6678.6,
   "percentage": 0.066786
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 5469.4,
   "percentage": 0.054694
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 3784.1,
   "percentage": 0.037841
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 2692.5,
   "percentage": 0.026925
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 1966.3,
   "percentage": 0.019663
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 2110.3,
   "percentage": 0.021103
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 2511.06666666667,
   "percentage": 0.025110666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Māori",
   "sex": "Total",
   "face_to_face_per_100000": 5716.8,
   "percentage": 0.057168
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 6316.9,
   "percentage": 0.063169
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 510.3,
   "percentage": 0.005103
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 2981.7,
   "percentage": 0.029817
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 6510.9,
   "percentage": 0.065109
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 8540.2,
   "percentage": 0.085402
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 9079,
   "percentage": 0.09079
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 10750.4,
   "percentage": 0.107504
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 11227.1,
   "percentage": 0.112271
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 10572.8,
   "percentage": 0.105728
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 9773.4,
   "percentage": 0.097734
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 7829,
   "percentage": 0.07829
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 6161.8,
   "percentage": 0.061618
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 4141.5,
   "percentage": 0.041415
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 2810.6,
   "percentage": 0.028106
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 1801.4,
   "percentage": 0.018014
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 2157.6,
   "percentage": 0.021576
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 2432.4,
   "percentage": 0.024324
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Māori",
   "sex": "Male",
   "face_to_face_per_100000": 6712.9,
   "percentage": 0.067129
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 4666,
   "percentage": 0.04666
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 329,
   "percentage": 0.00329
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 1063.4,
   "percentage": 0.010634
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6072,
   "percentage": 0.06072
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 8030.3,
   "percentage": 0.080303
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6252.4,
   "percentage": 0.062524
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6880.6,
   "percentage": 0.068806
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6765.1,
   "percentage": 0.067651
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6682,
   "percentage": 0.06682
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 6109.7,
   "percentage": 0.061097
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 5668,
   "percentage": 0.05668
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 4852.4,
   "percentage": 0.048524
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 3471.9,
   "percentage": 0.034719
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 2589.6,
   "percentage": 0.025896
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 2112.8,
   "percentage": 0.021128
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 2069,
   "percentage": 0.02069
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 2556.7,
   "percentage": 0.025567
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Māori",
   "sex": "Female",
   "face_to_face_per_100000": 4818.3,
   "percentage": 0.048183
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 2935,
   "percentage": 0.02935
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 323,
   "percentage": 0.00323
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 1038.5,
   "percentage": 0.010385
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 3276.2,
   "percentage": 0.032762
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 5119.3,
   "percentage": 0.051193
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 3941.5,
   "percentage": 0.039415
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 4244.6,
   "percentage": 0.042446
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 4160.3,
   "percentage": 0.041603
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 3880.8,
   "percentage": 0.038808
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 3529.4,
   "percentage": 0.035294
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 3046.5,
   "percentage": 0.030465
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 2539.3,
   "percentage": 0.025393
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 2061.3,
   "percentage": 0.020613
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 1684.4,
   "percentage": 0.016844
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 1523.2,
   "percentage": 0.015232
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 1616.8,
   "percentage": 0.016168
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 2448.53333333333,
   "percentage": 0.024485333333333
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Pacific",
   "sex": "Total",
   "face_to_face_per_100000": 2950.7,
   "percentage": 0.029507
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3662.7,
   "percentage": 0.036627
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 392.4,
   "percentage": 0.003924
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 1396.7,
   "percentage": 0.013967
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3313.7,
   "percentage": 0.033137
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 5363.3,
   "percentage": 0.053633
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 5490.3,
   "percentage": 0.054903
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 5747.8,
   "percentage": 0.057478
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 5947.9,
   "percentage": 0.059479
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 5389.7,
   "percentage": 0.053897
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 4711.2,
   "percentage": 0.047112
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3796.3,
   "percentage": 0.037963
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3044.9,
   "percentage": 0.030449
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 2467.1,
   "percentage": 0.024671
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 2119.3,
   "percentage": 0.021193
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 1771.1,
   "percentage": 0.017711
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 2103,
   "percentage": 0.02103
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3289.56666666667,
   "percentage": 0.032895666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Pacific",
   "sex": "Male",
   "face_to_face_per_100000": 3725.9,
   "percentage": 0.037259
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2221,
   "percentage": 0.02221
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 250.1,
   "percentage": 0.002501
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 667.3,
   "percentage": 0.006673
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 3236.5,
   "percentage": 0.032365
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 4866.5,
   "percentage": 0.048665
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2403.1,
   "percentage": 0.024031
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2819.5,
   "percentage": 0.028195
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2442.4,
   "percentage": 0.024424
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2437,
   "percentage": 0.02437
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2414.5,
   "percentage": 0.024145
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2351,
   "percentage": 0.02351
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2066.9,
   "percentage": 0.020669
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 1680.8,
   "percentage": 0.016808
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 1261.3,
   "percentage": 0.012613
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 1288.7,
   "percentage": 0.012887
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 1194,
   "percentage": 0.01194
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 1962.76666666667,
   "percentage": 0.019627666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Pacific",
   "sex": "Female",
   "face_to_face_per_100000": 2211.1,
   "percentage": 0.022111
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 956.3,
   "percentage": 0.009563
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 187.5,
   "percentage": 0.001875
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 575.9,
   "percentage": 0.005759
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1261.6,
   "percentage": 0.012616
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1757.2,
   "percentage": 0.017572
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1160.9,
   "percentage": 0.011609
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1065.7,
   "percentage": 0.010657
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1039.2,
   "percentage": 0.010392
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 997.8,
   "percentage": 0.009978
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 936.6,
   "percentage": 0.009366
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 849.1,
   "percentage": 0.008491
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 825.6,
   "percentage": 0.008256
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 678.4,
   "percentage": 0.006784
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 715.8,
   "percentage": 0.007158
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 712.7,
   "percentage": 0.007127
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 827.3,
   "percentage": 0.008273
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 1625.13333333333,
   "percentage": 0.016251333333333
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Asian",
   "sex": "Total",
   "face_to_face_per_100000": 953.2,
   "percentage": 0.009532
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 925.4,
   "percentage": 0.009254
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 203.7,
   "percentage": 0.002037
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 758,
   "percentage": 0.00758
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1158.8,
   "percentage": 0.011588
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1392,
   "percentage": 0.01392
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1095.7,
   "percentage": 0.010957
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1040.1,
   "percentage": 0.010401
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1060.2,
   "percentage": 0.010602
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1007.8,
   "percentage": 0.010078
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 909.3,
   "percentage": 0.009093
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 914.1,
   "percentage": 0.009141
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 766.9,
   "percentage": 0.007669
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 742.1,
   "percentage": 0.007421
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 664.9,
   "percentage": 0.006649
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 591.7,
   "percentage": 0.005917
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 599,
   "percentage": 0.00599
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 1694.7,
   "percentage": 0.016947
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Asian",
   "sex": "Male",
   "face_to_face_per_100000": 914.2,
   "percentage": 0.009142
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 986.2,
   "percentage": 0.009862
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 170.5,
   "percentage": 0.001705
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 380.1,
   "percentage": 0.003801
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1370.1,
   "percentage": 0.013701
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 2160,
   "percentage": 0.0216
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1243.3,
   "percentage": 0.012433
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1092.1,
   "percentage": 0.010921
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1020,
   "percentage": 0.0102
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 988.6,
   "percentage": 0.009886
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 960,
   "percentage": 0.0096
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 797.6,
   "percentage": 0.007976
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 874.3,
   "percentage": 0.008743
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 627,
   "percentage": 0.00627
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 758.3,
   "percentage": 0.007583
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 823.4,
   "percentage": 0.008234
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1030,
   "percentage": 0.0103
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 1694.7,
   "percentage": 0.016947
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "Asian",
   "sex": "Female",
   "face_to_face_per_100000": 995.4,
   "percentage": 0.009954
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 3139.5,
   "percentage": 0.031395
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 544.7,
   "percentage": 0.005447
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 2614,
   "percentage": 0.02614
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 4679.3,
   "percentage": 0.046793
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 6703.4,
   "percentage": 0.067034
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 4823.2,
   "percentage": 0.048232
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 4289.7,
   "percentage": 0.042897
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 4314.7,
   "percentage": 0.043147
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 3929.8,
   "percentage": 0.039298
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 3612.7,
   "percentage": 0.036127
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 3123.8,
   "percentage": 0.031238
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 2751.4,
   "percentage": 0.027514
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 2241.9,
   "percentage": 0.022419
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 1803.8,
   "percentage": 0.018038
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 1492,
   "percentage": 0.01492
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 1520.3,
   "percentage": 0.015203
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 2360.46666666667,
   "percentage": 0.023604666666667
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "European/Other",
   "sex": "Total",
   "face_to_face_per_100000": 3479.7,
   "percentage": 0.034797
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 3256.7,
   "percentage": 0.032567
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 641.8,
   "percentage": 0.006418
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 3535.8,
   "percentage": 0.035358
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 4574,
   "percentage": 0.04574
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 5722.9,
   "percentage": 0.057229
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 5040,
   "percentage": 0.0504
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 4400,
   "percentage": 0.044
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 4498.2,
   "percentage": 0.044982
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 4218.1,
   "percentage": 0.042181
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 3963.7,
   "percentage": 0.039637
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 3500,
   "percentage": 0.035
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 2943.7,
   "percentage": 0.029437
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 2405,
   "percentage": 0.02405
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 1858.6,
   "percentage": 0.018586
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 1425.2,
   "percentage": 0.014252
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 1381.1,
   "percentage": 0.013811
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 2190.5,
   "percentage": 0.021905
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "European/Other",
   "sex": "Male",
   "face_to_face_per_100000": 3593.2,
   "percentage": 0.035932
 },
 {
   "year": 2016,
   "age_group": "Total (Crude rate)",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 3026.5,
   "percentage": 0.030265
 },
 {
   "year": 2016,
   "age_group": "0-4",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 442.5,
   "percentage": 0.004425
 },
 {
   "year": 2016,
   "age_group": "5-9",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 1644.9,
   "percentage": 0.016449
 },
 {
   "year": 2016,
   "age_group": "10-14",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 4788.8,
   "percentage": 0.047888
 },
 {
   "year": 2016,
   "age_group": "15-19",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 7730.5,
   "percentage": 0.077305
 },
 {
   "year": 2016,
   "age_group": "20-24",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 4594.6,
   "percentage": 0.045946
 },
 {
   "year": 2016,
   "age_group": "25-29",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 4174.8,
   "percentage": 0.041748
 },
 {
   "year": 2016,
   "age_group": "30-34",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 4137.3,
   "percentage": 0.041373
 },
 {
   "year": 2016,
   "age_group": "35-39",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 3660.3,
   "percentage": 0.036603
 },
 {
   "year": 2016,
   "age_group": "40-44",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 3285.4,
   "percentage": 0.032854
 },
 {
   "year": 2016,
   "age_group": "45-49",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 2769.6,
   "percentage": 0.027696
 },
 {
   "year": 2016,
   "age_group": "50-54",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 2566.4,
   "percentage": 0.025664
 },
 {
   "year": 2016,
   "age_group": "55-59",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 2083.8,
   "percentage": 0.020838
 },
 {
   "year": 2016,
   "age_group": "60-64",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 1750.8,
   "percentage": 0.017508
 },
 {
   "year": 2016,
   "age_group": "65-69",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 1556.4,
   "percentage": 0.015564
 },
 {
   "year": 2016,
   "age_group": "70-74",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 1651.1,
   "percentage": 0.016511
 },
 {
   "year": 2016,
   "age_group": "75+",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 2483.93333333333,
   "percentage": 0.024839333333333
 },
 {
   "year": 2016,
   "age_group": "Total (Age-standardised rate)",
   "ethnicity": "European/Other",
   "sex": "Female",
   "face_to_face_per_100000": 3368.6,
   "percentage": 0.033686
 }
]
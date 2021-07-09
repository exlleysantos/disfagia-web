const user = {
    "id": 1,
    "name": "Usuário Nutricionista",
    "email": "u@exlley",
    "specialty_id": 1,
    "created_at": "2021-06-04 13:43:53",
    "updated_at": "2021-06-04 13:43:53",
    "patients": [
      {
        "id": 1,
        "fullname": "Francisco Vicente",
        "email": "oukqs@mail",
        "cpf": "10012906409",
        "birthdate": "2021-05-26T03:00:00.000Z",
        "sex": "male",
        "type": "patient",
        "created_at": "2021-05-28 11:34:20",
        "updated_at": "2021-05-28 11:34:20",
        "pivot": {
          "user_id": 1,
          "healthcare_professional_id": 1
        }
      },
      {
        "id": 3,
        "fullname": "Sebastiana Francisca",
        "email": "lelim@mail",
        "cpf": "10012906409",
        "birthdate": "2021-05-26T03:00:00.000Z",
        "sex": "male",
        "type": "patient",
        "created_at": "2021-06-04 13:41:15",
        "updated_at": "2021-06-04 13:41:15",
        "pivot": {
          "user_id": 3,
          "healthcare_professional_id": 1
        }
      }
    ]
  }

  export default user;
const express = require('express')
const router = express.Router()

const {getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} =  require('../controllers/people')





let {people} = require('../data')


// // m1
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/postman/:id', updatePerson)
// router.delete('/postman/:id', deletePerson)

// m2
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/postman/:id').put(updatePerson).delete(deletePerson)

module.exports = router
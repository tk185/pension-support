const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
// router.post('/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

//   const over18 = req.session.data['over-18']
//
//   if (over18 === 'false') {
//     res.redirect('/branching/under-18')
//   } else {
//     res.redirect('/branching/over-18')
//   }
// })

router.post('/existingUT/customer-answer', function (req, res) {
  const cust = req.session.data['customer']

  if (cust === 'main') {
    res.redirect('/existingUT/name')
  } else {
    res.redirect('/existingUT2/name2')
  }
})

router.post('/existingUT/postcode-answer', function (req, res) {
  const postcode = req.session.data['postcode']

  if (postcode == 'WS13 7DH' | postcode == 'WS137DH') {
    res.redirect('/existingUT/resultWS13')
  } else if (postcode == 'HU12 0SQ' | postcode == 'HU120SQ'){
    res.redirect('/existingUT/resultHU1')
  }
  else if (postcode == 'HU12 0SA' | postcode == 'HU120SA'){
    res.redirect('/existingUT/resultHU12')
  }
  else if (postcode == 'G42 9BT' | postcode == 'G429BT') {
    res.redirect('/existingUT/resultG42')
  }

})

router.post('/missingcope2/mc', function (req, res) {
  const cope = req.session.data['customer']

  if (cope === 'main') {
    res.redirect('/missingcope2/missing')
  } else {
    res.redirect('/missingcope2/missing2')
  }
})

router.post('/missingcope3/mc', function (req, res) {
  const cope = req.session.data['customer']

  if (cope === 'main') {
    res.redirect('/missingcope3/missing')
  } else {
    res.redirect('/missingcope3/missing2')
  }
})

router.post('/missingcope2_2/mc', function (req, res) {
  const cope = req.session.data['customer']

  if (cope === 'main') {
    res.redirect('/missingcope2_2/missing')
  } else {
    res.redirect('/missingcope2_2/missing2')
  }
})

router.post('/missingcope3_2/mc', function (req, res) {
  const cope = req.session.data['customer']

  if (cope === 'main') {
    res.redirect('/missingcope3_2/missing')
  } else {
    res.redirect('/missingcope3_2/missing2')
  }
})

module.exports = router

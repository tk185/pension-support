const express = require('express')
const router = express.Router()


module.exports = router

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

// router.post('existingUT/customer-answer', function (req, res) {
//   const customer = req.session.data['customer']
//
//   if (customer === 'main') {
//     res.redirect('/existingUT/name')
//   } else {
//     res.redirect('/existingUT2/name2')
//   }
// })
//
// router.post('/existing_final/customer-answer', function (req, res) {
//   const cust = req.session.data['customer']
//
//   if (cust === 'third') {
//     res.redirect('name2')
//   } else {
//     res.redirect('name')
//   }
// })
//
//
//
// router.post('/existingUT/postcode-answer', function (req, res) {
//   const postcode = req.session.data['postcode']
//
//   if (postcode == 'WS13 7DH' | postcode == 'WS137DH') {
//     res.redirect('/existingUT/resultWS13')
//   } else if (postcode == 'HU12 0SQ' | postcode == 'HU120SQ'){
//     res.redirect('/existingUT/resultHU1')
//   }
//   else if (postcode == 'HU12 0SA' | postcode == 'HU120SA'){
//     res.redirect('/existingUT/resultHU12')
//   }
//   else if (postcode == 'G42 9BT' | postcode == 'G429BT') {
//     res.redirect('/existingUT/resultG42')
//   }
//
// })
//
// router.post('/missingcope2/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === 'main') {
//     res.redirect('/missingcope2/missing')
//   } else {
//     res.redirect('/missingcope2/missing2')
//   }
// })
//
// router.post('/missingcope3/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === 'main') {
//     res.redirect('/missingcope3/missing')
//   } else {
//     res.redirect('/missingcope3/missing2')
//   }
// })
//
// router.post('/missingcope2_2/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === '3') {
//     res.redirect('/missingcope2_2/missing')
//   } else {
//     res.redirect('/missingcope2_2/missing2')
//   }
// })
//
// router.post('/missingcope3_2/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === '3') {
//     res.redirect('/missingcope3_2/missing')
//   } else {
//     res.redirect('/missingcope3_2/missing2')
//   }
// })
//
// router.post('/missingcope2_3/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === '3') {
//     res.redirect('/missingcope2_3/missing')
//   } else {
//     res.redirect('/missingcope2_3/missing2')
//   }
// })
//
// router.post('/missingcope3_3/mc', function (req, res) {
//   const cope = req.session.data['customer']
//
//   if (cope === '3') {
//     res.redirect('/missingcope3_3/missing')
//   } else {
//     res.redirect('/missingcope3_3/missing2')
//   }
// })

router.post('/over_pension_age2_2/acs', function (req, res) {
  const access = req.session.data['access']

  if (access === 'yes') {
    res.redirect('/over_pension_age2_2/accessroute')
  } else {
    res.redirect('/over_pension_age2_2/exclusion')
  }
})


router.post('/examples/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('/examples/branching/under-18')
  } else {
    res.redirect('/examples/branching/over-18')
  }
})





module.exports = router

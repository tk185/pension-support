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


router.post('/RoleA/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleA/name')
  } else {
    res.redirect('/RoleA/name2')
  }
})

router.post('/RoleC/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/name')
  } else {
    res.redirect('/RoleC/name2')
  }
})

router.post('/RoleC/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC/routeSR3')
  }
  else {
    res.redirect('/RoleC/routeSR')
  }
})

router.post('/RoleC/MBquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashMB')
  }
})

router.post('/RoleC/NVquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/index')
  }
})

router.post('/RoleC/RREquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashRRE')
  }
})

router.post('/RoleC/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR')
  }
})

router.post('/RoleC/SR2question', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR2')
  }
})

router.post('/RoleC/SR3question', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR3')
  }
})

router.post('/RoleC/format', function (req, res) {
  const access = req.session.data['access']

  if (access === 'yes') {
    res.redirect('/RoleC/accessroute')
  } else {
    res.redirect('/RoleC/customer')
  }
})

router.post('/RoleA/format', function (req, res) {
  const access = req.session.data['access']

  if (access === 'yes') {
    res.redirect('/RoleA/accessroute')
  } else {
    res.redirect('/RoleA/customer')
  }
})

router.post('/RoleC0_2/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_2/name')
  } else {
    res.redirect('/RoleC0_2/customer2')
  }
})

router.post('/RoleC0_2/legrep', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_2/name2')
  } else {
    res.redirect('/RoleC0_2/legal')
  }
})

router.post('/MQP_Letter0_1/third_party', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/MQP_Letter0_1/name2')
  } else {
    res.redirect('/MQP_Letter0_1/preview')
  }
})
router.post('/MQP_Letter0_2/third_party', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/mqp_letter0_2/name2')
  } else {
    res.redirect('/mqp_letter0_2/preview')
  }
})

router.post('/MQP_Letter0_2/addcheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/mqp_letter0_2/customer')
  } else {
    res.redirect('/mqp_letter0_2/postcode')
  }
})

router.post('/RoleC0_3/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC0_3/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC0_3/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC0_3/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC0_3/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC0_3/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC0_3/routeSR3')
  }
  else {
    res.redirect('/RoleC0_3/routeSR')
  }
})

router.post('/RoleC0_3/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/check')
  } else {
    res.redirect('/RoleC0_3/dashSR')
  }
})

router.post('/RoleC0_3/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/name')
  } else {
    res.redirect('/RoleC0_3/customer_third')
  }
})

router.post('/RoleC0_3/missingManual', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/access')
  } else {
    res.redirect('/RoleC0_3/NI')
  }
})

router.post('/RoleC0_3/addcheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/preview')
  } else {
    res.redirect('/RoleC0_3/postcode')
  }
})

router.post('/RoleC0_3/attorney', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/name3')
  } else {
    res.redirect('/RoleC0_3/name2')
  }
})

router.post('/RoleC0_3/addcheck2', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_3/preview_tp')
  } else {
    res.redirect('/RoleC0_3/postcode2')
  }
})

router.post('/RoleC0_4/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC0_4/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC0_4/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC0_4/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC0_4/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC0_4/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC0_4/routeSR3')
  }
  else {
    res.redirect('/RoleC0_4/routeSR')
  }
})

router.post('/RoleC0_4/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/access')
  } else {
    res.redirect('/RoleC0_4/dashSR')
  }
})

router.post('/RoleC0_4/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/name')
  } else {
    res.redirect('/RoleC0_4/customer_third')
  }
})

router.post('/RoleC0_4/missingManual', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/routeSR')
  } else {
    res.redirect('/RoleC0_4/NI')
  }
})

router.post('/RoleC0_4/addcheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/preview')
  } else {
    res.redirect('/RoleC0_4/postcode')
  }
})

router.post('/RoleC0_4/attorney', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/name3')
  } else {
    res.redirect('/RoleC0_4/thirdparty0')
  }
})

router.post('/RoleC0_4/addcheck2', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_4/preview_tp')
  } else {
    res.redirect('/RoleC0_4/postcode2')
  }
})

router.post('/RoleC0_5/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC0_5/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC0_5/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC0_5/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC0_5/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC0_5/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC0_5/routeSR3')
  }
  else {
    res.redirect('/RoleC0_5/routeSR')
  }
})

router.post('/RoleC0_5/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/access')
  } else {
    res.redirect('/RoleC0_5/dashSR')
  }
})

router.post('/RoleC0_5/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/name')
  } else {
    res.redirect('/RoleC0_5/customer_third')
  }
})

router.post('/RoleC0_5/missingManual', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/routeSR')
  } else {
    res.redirect('/RoleC0_5/NI')
  }
})

router.post('/RoleC0_5/addcheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/preview')
  } else {
    res.redirect('/RoleC0_5/overseas2')
  }
})

router.post('/RoleC0_5/attorney', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/name3')
  } else {
    res.redirect('/RoleC0_5/thirdparty0')
  }
})

router.post('/RoleC0_5/addcheck2', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/preview_tp')
  } else {
    res.redirect('/RoleC0_5/overseas2b')
  }
})

router.post('/RoleC0_5/overseascheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_5/postcode2')
  } else {
    res.redirect('/RoleC0_5/overseas0b')
  }
})

router.post('/RoleC0_6/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC0_6/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC0_6/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC0_6/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC0_6/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC0_6/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC0_6/routeSR3')
  }
  else {
    res.redirect('/RoleC0_6/routeSR')
  }
})

router.post('/RoleC0_6/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/Welshlanguage')
  } else {
    res.redirect('/RoleC0_6/dashSR')
  }
})

router.post('/RoleC0_6/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/address')
  } else {
    res.redirect('/RoleC0_6/customer_third')
  }
})

router.post('/RoleC0_6/altform', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/altformatyes2')
  } else {
    res.redirect('/RoleC0_6/Welsh')
  }
})

router.post('/RoleC0_6/missingManual', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/routeSR')
  } else {
    res.redirect('/RoleC0_6/NI')
  }
})

router.post('/RoleC0_6/addcheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/preview')
  } else {
    res.redirect('/RoleC0_6/overseas2')
  }
})

router.post('/RoleC0_6/attorney', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/address2')
  } else {
    res.redirect('/RoleC0_6/thirdparty0')
  }
})

router.post('/RoleC0_6/addcheck2', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/preview_tp')
  } else {
    res.redirect('/RoleC0_6/overseas2b')
  }
})

router.post('/RoleC0_6/overseascheck', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC0_6/postcode2')
  } else {
    res.redirect('/RoleC0_6/overseas0b')
  }
})


router.post('/NameNINO-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var NameNINO = req.session.data['Name-NINO']

  // Check whether the variable matches a condition
  if (NameNINO == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/how_can_help1')
  }
  if (NameNINO == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/NINOstart')
  }
})

router.post('/howcanhelp1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howcanhelp1 = req.session.data['how_can_help1']

  // Check whether the variable matches a condition
  if (howcanhelp1 == "State Pension forecast"){
    // Send user to next page
    res.redirect('/RoleC0_6/own_forecast')
  }
  if (howcanhelp1 == "Forecast enquiry"){
    // Send user to next page
    res.redirect('/RoleC0_6/forecast1')
  }
})

router.post('/ownforecast-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ownforecast = req.session.data['own-forecast']

  // Check whether the variable matches a condition
  if (ownforecast == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/address')
  }
  if (ownforecast == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/appointee')
  }
})

router.post('/address-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressfound = req.session.data['address-found']

  // Check whether the variable matches a condition
  if (addressfound == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/Welshlanguage')
  }
  if (addressfound == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/postcode')
  }
})

router.post('/whichformat1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat1 = req.session.data['which-format1']

  // Check whether the variable matches a condition
  if (whichformat1 == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformat2')
  }
  if (whichformat1 == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformat1')
  }

})

router.post('/whichformat2-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat2 = req.session.data['which-format2']

  // Check whether the variable matches a condition
  if (whichformat2 == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformatyesWL')
  }
  if (whichformat2 == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/customer')
  }

})

router.post('/altformatyes1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatyes1 = req.session.data['altformat-yes1']

  // Check whether the variable matches a condition
  if (altformatyes1 == "Large print"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprint')
  }
  if (altformatyes1 == "Coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/colouredpaper')
  }
  if (altformatyes1 == "Large print and coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintcoloured')
  }
  if (altformatyes1 == "Braille"){
    // Send user to next page
    res.redirect('/RoleC0_6/braille')
  }
  if (altformatyes1 == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('/RoleC0_6/audioformat')
  }
  if (altformatyes1 == "British Sign Language (Mpeg or DVD)"){
    // Send user to next page
    res.redirect('/RoleC0_6/BSL')
  }
  if (altformatyes1 == "Something else"){
    // Send user to next page
    res.redirect('/RoleC0_6/somethingelse')
  }
})

router.post('/altformatwelsh-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatwelsh = req.session.data['altformat-welsh']

  // Check whether the variable matches a condition
  if (altformatwelsh == "Large print"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintWL')
  }
  if (altformatwelsh == "Coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/colouredpaperWL')
  }
  if (altformatwelsh == "Large print and coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintcolouredWL')
  }
  if (altformatwelsh == "Braille"){
    // Send user to next page
    res.redirect('/RoleC0_6/brailleWL')
  }
  if (altformatwelsh == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('/RoleC0_6/audioformatWL')
  }
  if (altformatwelsh == "British Sign Language (Mpeg or DVD)"){
    // Send user to next page
    res.redirect('/RoleC0_6/BSLWL')
  }
  if (altformatwelsh == "Something else"){
    // Send user to next page
    res.redirect('/RoleC0_6/somethingelseWL')
  }
})

router.post('/whichformat-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat = req.session.data['which-format']

  // Check whether the variable matches a condition
  if (whichformat == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformatyes1')
  }
  if (whichformat == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/customer')
  }

})
router.post('/NameNINO-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var NameNINO = req.session.data['Name-NINO']

  // Check whether the variable matches a condition
  if (NameNINO == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/how_can_help1')
  }
  if (NameNINO == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/NINOstart')
  }
})

router.post('/howcanhelp1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howcanhelp1 = req.session.data['how_can_help1']

  // Check whether the variable matches a condition
  if (howcanhelp1 == "State Pension forecast"){
    // Send user to next page
    res.redirect('/RoleC0_6/own_forecast')
  }
  if (howcanhelp1 == "Forecast enquiry"){
    // Send user to next page
    res.redirect('/RoleC0_6/forecast1')
  }
})

router.post('/ownforecast-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ownforecast = req.session.data['own-forecast']

  // Check whether the variable matches a condition
  if (ownforecast == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/address')
  }
  if (ownforecast == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/appointee')
  }
})

router.post('/address-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressfound = req.session.data['address-found']

  // Check whether the variable matches a condition
  if (addressfound == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/Welshlanguage')
  }
  if (addressfound == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/postcode')
  }
})

router.post('/whichformat1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat1 = req.session.data['which-format1']

  // Check whether the variable matches a condition
  if (whichformat1 == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformat2')
  }
  if (whichformat1 == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformat1')
  }

})

router.post('/whichformat2-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat2 = req.session.data['which-format2']

  // Check whether the variable matches a condition
  if (whichformat2 == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformatyesWL')
  }
  if (whichformat2 == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/forecast1')
  }

})

router.post('/altformatyes1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatyes1 = req.session.data['altformat-yes1']

  // Check whether the variable matches a condition
  if (altformatyes1 == "Large print"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprint')
  }
  if (altformatyes1 == "Coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/colouredpaper')
  }
  if (altformatyes1 == "Large print and coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintcoloured')
  }
  if (altformatyes1 == "Braille"){
    // Send user to next page
    res.redirect('/RoleC0_6/braille')
  }
  if (altformatyes1 == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('/RoleC0_6/audioformat')
  }
  if (altformatyes1 == "British Sign Language (Mpeg or DVD)"){
    // Send user to next page
    res.redirect('/RoleC0_6/BSL')
  }
  if (altformatyes1 == "Something else"){
    // Send user to next page
    res.redirect('/RoleC0_6/somethingelse')
  }
})

router.post('/altformatwelsh-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatwelsh = req.session.data['altformat-welsh']

  // Check whether the variable matches a condition
  if (altformatwelsh == "Large print"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintWL')
  }
  if (altformatwelsh == "Coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/colouredpaperWL')
  }
  if (altformatwelsh == "Large print and coloured paper"){
    // Send user to next page
    res.redirect('/RoleC0_6/largeprintcolouredWL')
  }
  if (altformatwelsh == "Braille"){
    // Send user to next page
    res.redirect('/RoleC0_6/brailleWL')
  }
  if (altformatwelsh == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('/RoleC0_6/audioformatWL')
  }
  if (altformatwelsh == "British Sign Language (Mpeg or DVD)"){
    // Send user to next page
    res.redirect('/RoleC0_6/BSLWL')
  }
  if (altformatwelsh == "Something else"){
    // Send user to next page
    res.redirect('/RoleC0_6/somethingelseWL')
  }
})

router.post('/whichformat-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat = req.session.data['which-format']

  // Check whether the variable matches a condition
  if (whichformat == "Yes"){
    // Send user to next page
    res.redirect('/RoleC0_6/altformatyes1')
  }
  if (whichformat == "No"){
    // Send user to next page
    res.redirect('/RoleC0_6/forecast1')
  }

})

module.exports = router

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



module.exports = router

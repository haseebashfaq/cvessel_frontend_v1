export default () => {
  //LEFT MOBILE MENU OPEN
  window.$('.ts-menu-5').on('click', function() {
    window.$('.mob-right-nav').css('right', '0px')
  })

  //LEFT MOBILE MENU OPEN
  window.$('.mob-right-nav-close').on('click', function() {
    window.$('.mob-right-nav').css('right', '-270px')
  })

  //LEFT MOBILE MENU CLOSE
  window.$('.mob-close').on('click', function() {
    window.$('.mob-close').hide('fast')
    window.$('.menu').css('left', '-92px')
    window.$('.mob-menu').show('slow')
  })

  //mega menu
  window.$('.t-bb').hover(function() {
    window.$('.cat-menu').fadeIn(50)
  })
  window.$('.ts-menu').mouseleave(function() {
    window.$('.cat-menu').fadeOut(50)
  })

  //mega menu
  window.$('.sea-drop').on('click', function() {
    window.$('.sea-drop-1').fadeIn(100)
  })
  window.$('.sea-drop-1').mouseleave(function() {
    window.$('.sea-drop-1').fadeOut(50)
  })
  window.$('.dir-ho-t-sp').mouseleave(function() {
    window.$('.sea-drop-1').fadeOut(50)
  })

  //mega menu top menu
  window.$('.sea-drop-top').on('click', function() {
    window.$('.sea-drop-2').fadeIn(100)
  })
  window.$('.sea-drop-1').mouseleave(function() {
    window.$('.sea-drop-2').fadeOut(50)
  })
  window.$('.top-search').mouseleave(function() {
    window.$('.sea-drop-2').fadeOut(50)
  })

  //ADMIN LEFT MOBILE MENU OPEN
  window.$('.atab-menu').on('click', function() {
    window.$('.sb2-1').css('left', '0')
    window.$('.btn-close-menu').css('display', 'inline-block')
  })

  //ADMIN LEFT MOBILE MENU CLOSE
  window.$('.btn-close-menu').on('click', function() {
    window.$('.sb2-1').css('left', '-350px')
    window.$('.btn-close-menu').css('display', 'none')
  })

  //mega menu
  window.$('.t-bb').hover(function() {
    window.$('.cat-menu').fadeIn(50)
  })
  window.$('.ts-menu').mouseleave(function() {
    window.$('.cat-menu').fadeOut(50)
  })
  //review replay
  window.$('.edit-replay').on('click', function() {
    window.$('.hide-box').show()
  })

  //PRE LOADING
  // window.$('#status').fadeOut()
  // window.$('#preloader')
  //   .delay(350)
  //   .fadeOut('slow')
  // window.$('body')
  //   .delay(350)
  //   .css({
  //     overflow: 'visible',
  //   })

  window.$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: 400, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false, // Stops event propagation
  })
  window.$('.dropdown-button2').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: (window.$('.dropdown-content').width() * 3) / 2.5 + 5, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
  })

  //Collapsible
  window.$('.collapsible').collapsible()

  //material select
  window.$('select').material_select()

  //AUTO COMPLETE CITY SELECT
  // window.$('#select-city.autocomplete').autocomplete({
  //     data: {
  //         "New York": null,
  //         "California": null,
  //         "Illinois": null,
  //         "Texas": null,
  //         "Pennsylvania": null,
  //         "San Diego": null,
  //         "Los Angeles": null,
  //         "Dallas": null,
  //         "Austin": null,
  //         "Columbus": null,
  //         "Charlotte": null,
  //         "El Paso": null,
  //         "Portland": null,
  //         "Las Vegas": null,
  //         "Oklahoma City": null,
  //         "Milwaukee": null,
  //         "Tucson": null,
  //         "Sacramento": null,
  //         "Long Beach": null,
  //         "Oakland": null,
  //         "Arlington": null,
  //         "Tampa": null,
  //         "Corpus Christi": null,
  //         "Greensboro": null,
  //         "Jersey City": null
  //     },
  //     limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
  //     onAutocomplete: function(val) {
  //         // Callback function when value is autcompleted.
  //     },
  //     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  // });

  //AUTO COMPLETE SEARCH SELECT
  // window.$('#select-search.autocomplete').autocomplete({
  //     data: {
  //         "Property Management Services": 'images/menu/1.png',
  //         "Hotel and Resorts": 'images/menu/4.png',
  //         "Education and Traninings": 'images/menu/2.png',
  //         "Internet Service Providers": 'images/menu/3.png',
  //         "Computer Repair & Services": 'images/menu/5.png',
  //         "Coaching & Tuitions": 'images/menu/6.png',
  //         "Job Training": 'images/menu/6.png',
  //         "Skin Care & Treatment": 'images/menu/7.png',
  // 	"Real Estates": 'images/menu/1.png',
  // 	"Travel and Transport": 'images/menu/2.png',
  // 	"Property and Rentels": 'images/menu/3.png',
  // 	"Professional Services": 'images/menu/4.png',
  // 	"Domestic Help Services": 'images/menu/5.png',
  // 	"Home Appliances Repair & Services": 'images/menu/6.png',
  // 	"Furniture Dealers": 'images/menu/7.png',
  // 	"Packers and Movers": 'images/menu/1.png',
  // 	"Interior Designers": 'images/menu/2.png',
  // 	"Pest Control Services": 'images/menu/3.png',
  // 	"Plumbing Contractors & Dealers": 'images/menu/4.png',
  // 	"Modular Kitchen Dealers": 'images/menu/5.png',
  // 	"Web Designers Services": 'images/menu/6.png',
  // 	"Internet Service Providers": 'images/menu/7.png',
  // 	"Security System Dealers": 'images/menu/8.png',
  // 	"Entrance Exam Coaching": 'images/menu/1.png',
  // 	"Gyms and Fitness": 'images/menu/2.png',
  // 	"Yoga Classes": 'images/menu/3.png',
  // 	"Weight Loss Centres": 'images/menu/4.png',
  // 	"Dieticians & Nutritionists": 'images/menu/5.png',
  //         "Health and Fitness": 'images/menu/8.png'
  //     },
  //     limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
  //     onAutocomplete: function(val) {
  //         // Callback function when value is autcompleted.
  //     },
  //     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  // });

  //AUTO COMPLETE CITY SELECT
  // window.$('#top-select-city.autocomplete').autocomplete({
  //     data: {
  //         "New York": null,
  //         "California": null,
  //         "Illinois": null,
  //         "Texas": null,
  //         "Pennsylvania": null,
  //         "San Diego": null,
  //         "Los Angeles": null,
  //         "Dallas": null,
  //         "Austin": null,
  //         "Columbus": null,
  //         "Charlotte": null,
  //         "El Paso": null,
  //         "Portland": null,
  //         "Las Vegas": null,
  //         "Oklahoma City": null,
  //         "Milwaukee": null,
  //         "Tucson": null,
  //         "Sacramento": null,
  //         "Long Beach": null,
  //         "Oakland": null,
  //         "Arlington": null,
  //         "Tampa": null,
  //         "Corpus Christi": null,
  //         "Greensboro": null,
  //         "Jersey City": null
  //     },
  //     limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
  //     onAutocomplete: function(val) {
  //         // Callback function when value is autcompleted.
  //     },
  //     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  // });

  //AUTO COMPLETE SEARCH SELECT
  // window.$('#top-select-search.autocomplete').autocomplete({
  //     data: {
  //         "Property Management Services": 'images/menu/1.png',
  //         "Hotel and Resorts": 'images/menu/4.png',
  //         "Education and Traninings": 'images/menu/2.png',
  //         "Internet Service Providers": 'images/menu/3.png',
  //         "Computer Repair & Services": 'images/menu/5.png',
  //         "Coaching & Tuitions": 'images/menu/6.png',
  //         "Job Training": 'images/menu/6.png',
  //         "Skin Care & Treatment": 'images/menu/7.png',
  // 	"Real Estates": 'images/menu/1.png',
  // 	"Travel and Transport": 'images/menu/2.png',
  // 	"Property and Rentels": 'images/menu/3.png',
  // 	"Professional Services": 'images/menu/4.png',
  // 	"Domestic Help Services": 'images/menu/5.png',
  // 	"Home Appliances Repair & Services": 'images/menu/6.png',
  // 	"Furniture Dealers": 'images/menu/7.png',
  // 	"Packers and Movers": 'images/menu/1.png',
  // 	"Interior Designers": 'images/menu/2.png',
  // 	"Pest Control Services": 'images/menu/3.png',
  // 	"Plumbing Contractors & Dealers": 'images/menu/4.png',
  // 	"Modular Kitchen Dealers": 'images/menu/5.png',
  // 	"Web Designers Services": 'images/menu/6.png',
  // 	"Internet Service Providers": 'images/menu/7.png',
  // 	"Security System Dealers": 'images/menu/8.png',
  // 	"Entrance Exam Coaching": 'images/menu/1.png',
  // 	"Gyms and Fitness": 'images/menu/2.png',
  // 	"Yoga Classes": 'images/menu/3.png',
  // 	"Weight Loss Centres": 'images/menu/4.png',
  // 	"Dieticians & Nutritionists": 'images/menu/5.png',
  //         "Health and Fitness": 'images/menu/8.png'
  //     },
  //     limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
  //     onAutocomplete: function(val) {
  //         // Callback function when value is autcompleted.
  //     },
  //     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  // });

  //HOME PAGE FIXED MENU
  window.$(window).scroll(function() {
    if (window.$(this).scrollTop() > 450) {
      window.$('.hom-top-menu').fadeIn()
      window.$('.cat-menu').hide()
    } else {
      window.$('.hom-top-menu').fadeOut()
    }
  })

  function scrollNav() {
    window.$('.v3-list-ql-inn a').click(function() {
      //Toggle Class
      window.$('.active-list').removeClass('active-list')
      window
        .$(this)
        .closest('li')
        .addClass('active-list')
      var theClass = window.$(this).attr('class')
      window
        .$('.' + theClass)
        .parent('li')
        .addClass('active-list')
      //Animate
      window
        .$('html, body')
        .stop()
        .animate(
          {
            scrollTop: window.$(window.$(this).attr('href')).offset().top - 130,
          },
          400,
        )
      return false
    })
    window.$('.scrollTop a').scrollTop()
  }
  scrollNav()
}

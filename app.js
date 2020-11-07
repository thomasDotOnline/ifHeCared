// document ready
// create app
//  create init
// create event listener for question/questions
// capture the value of user input 
// select an out put based off of user input 
// display the selection on the dom 

const ifHeCared = {};
$(function () {
    ifHeCared.init();
})

// first question logic start
// eventlistener of button 1
ifHeCared.answer1 = function (question1Answer) {
    $('.cta1').on('click', function (event) {
        // capture the value of first answer
        const question1Answer = $('input[name=question1]:checked').val()

        // if else statment to display correct next question and hide all other possible displays
        if (question1Answer === 'enivorment') {
            $('.enviormental').toggleClass('hidden')
            $('.humanity, .firstQuestion').addClass('hidden')
        } else if (question1Answer === 'humanitarian') {
            $('.humanity').toggleClass('hidden')
            $('.enviormental, .firstQuestion').addClass('hidden')

        } else {
            alert('Please select an option... Or you can leave, and thanks for stopping by :) .')
        }
    })
}
// first question logic end

// second question logic start
// eventlistener of button 2
ifHeCared.answer2 = function (question2Answer) {
    $('.cta2').on('click', function (event) {
        // capture the value of the second answer
        const question2Answer = $('input[name=question2]:checked').val()

        // if else statment to display correct next question and hide all other possible displays
        if (question2Answer === 'land') {
            $('.enviormental, .water, global, indivigual').addClass('hidden')
            $('.land').toggleClass('hidden')

        } else if (question2Answer === 'water') {
            $('.enviormental, .land, .global, indivigual').addClass('hidden')
            $('.water').toggleClass('hidden')

        } else if (question2Answer === 'global') {
            $('.humanity, .land, .water, .indivigual').addClass('hidden')
            $('.global').toggleClass('hidden')

        } else if (question2Answer === 'indivigual') {
            $('.humanity, .water, .land, .global').addClass('hidden')
            $('.indivigual').toggleClass('hidden')
        } else {
            alert('Please select an option... Or you can leave, and thanks for stopping by :) .')
        }
    })
}
// second question logic end

// results display logic start 
ifHeCared.displayResults = function (question3Answer) {
    $('.cta3').on('click', function (event) {
        const question3Answer = $('input[name=question3]:checked').val()

        // if else statment to display correct next question and hide all other possible displays
        if (question3Answer === 'ProtectingForests') {
            $('.land').addClass('hidden')
            $('.results').html('<h2>Save the Rainforest!</h2> <p>Jeff Bezos could save the Amazon rainforest almost 3 times over with his networth. <a href="https://www.aljazeera.com/programmes/countingthecost/2019/09/amazon-rainforest-worth-190907121817405.html" target="_blank">more information here</a><p>')

        } else if (question3Answer === 'greenEnergy') {
            $('.land').addClass('hidden')
            $('.results').html('<h2>Advance Green Energy</h2> <p>With Jeff Bezos\'s net worth, he could build enough solar farms to power over 36 million homes. <a href="https://energycentral.com/c/gn/initial-steps-building-solar-farm" target="_blank">more information here</a></p>')

        } else if (question3Answer === 'savingReef') {
            $('.water').addClass('hidden')
            $('.results').html('<h2>Save the Great Barrier Reef!</h2> <p>With Jeff Bezos\'s networth he could save the Great Barrier Reef over 22 times. <a href="https://www.abc.net.au/news/2016-08-11/great-barrier-reef-cost-to-save-reef-tops-8-billion-dollars/7721652" target="_blank">more information here</a></p>')

        } else if (question3Answer === 'trashIsland') {
            $('.water').addClass('hidden')
            $('.results').html('<h2>Clean Up the Great Pacific Garbage Patch</h2> <p>Jeff Bezos\'s networth (as of September 12th, 2020) could hire enough boats to clean out the Pacific trash island many times. <a href="https://www.logisticsmgmt.com/article/moore_on_pricing_the_cost_of_ocean_pollution" target="_blank">more information here</a><a href="https://www.nbcsandiego.com/news/local/study-shows-the-great-pacific-garbage-patch-is-growing/40612/" target="_blank"> or here </a></p>')

        } else if (question3Answer === 'existingPrograms') {
            $('.global').toggleClass('hidden')
            $('.results').html('<h2>Fund Doctors Without Borders</h2> <p>Jeff could fund Doctors without borders for over 2 years. <a href="https://www.doctorswithoutborders.ca/msf-2018-facts-and-figures" target="_blank">more information here</a></p>')

        } else if (question3Answer === 'globalsupport') {
            $('.global').toggleClass('hidden')
            $('.results').html('<h2>Help Refugees!</h2><p>Jeff could sponser 8 and a half million refugee families of 4. <a href="https://www.agcrsi.org/getting-started/sponsorship-costs" target="_blank">more information here</a></p>')

        } else if (question3Answer === 'homelessness') {
            $('.indivigual').toggleClass('hidden')
            $('.results').html('<h2>Help the Homeless</h2> <p>With Jeff Bezozs\'s networth (as of September 12th, 2020), he could end homelessness in the entire United States over 9 times. <a href="https://www.huffingtonpost.ca/entry/homelessness-christmas-decorations_n_2276536?ri18n=true" target="_blank">more information here</a></p>')

        } else if (question3Answer === 'fairWages') {
            $('.indivigual').toggleClass('hidden')
            $('.results').html('<h2>Support for Amazon Workers!</h2> <p>If Jeff Bezos decided to give every single employee of Amazon — some 876,000 people — a one-time pandemic bonus of $105,000, he would have roughly the same networth he had prior to the Covid 19 outbreak. <a href="https://the.ink/p/billionaire-wealth-just-got-wealthier" target="_blank">more information here</a></p>')

        } else {
            alert('Please select an option... Or you can leave, and thanks for stopping by :) .')
        }
    })
}
// results display logic end

// reset logic start 
ifHeCared.reset = function () {
    // eventlistener button 4 
    $('.cta4').on('click', function (event) {
        if ($('.firstQuestion').hasClass('hidden')) {
            // reveals first question and hides other to prevent append errors
            $('.firstQuestion').toggleClass('hidden')
            $('.land').siblings().addClass('hidden')
            $('.land').addClass('hidden')
            $('.enviormental').addClass('hidden')
            $('.enviormental').siblings().addClass('hidden')

            // Empties the added results
            $('.clear').html('')

            // this code is to clear values of radio buttons on reset. this prevents glitches that make questions append on eachother on question 2 starts here ---->
            $(":radio").removeAttr("checked");
            $(':radio').prop('checked', false)
            // <----- ends here
        } else {
            alert('ask a question :)')
        }
    })
}
// reset logic end

ifHeCared.init = function () {
    ifHeCared.answer1();
    ifHeCared.answer2();
    ifHeCared.displayResults();
    ifHeCared.reset();
}
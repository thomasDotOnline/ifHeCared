// document ready 
// prevent default on the form submit 
// create event listener for question/questions
// capture the value of user input 
// select an out put based off of user input 
// display the selection on the dom 

const ifHeCared = {};
$(function () {
    ifHeCared.init();
})



ifHeCared.answer1 = function (question1Answer) {
    $('.cta1').on('click', function (event) {
        event.preventDefault();

        const question1Answer = $('input[name=question1]:checked').val()

        if (question1Answer === 'enivorment') {
            $('.enviormental').toggleClass('hidden')
            $('.humanity').addClass('hidden')
        } else {
            $('.humanity').toggleClass('hidden')
            $('.enviormental').addClass('hidden')

        }
    })
}

ifHeCared.answer2 = function (question2Answer) {
    $('.cta2').on('click', function (event) {
        const question2Answer = $('input[name=question2]:checked').val()

        if (question2Answer === 'land') {
            $('.land').toggleClass('hidden')
            $('.water').addClass('hidden')
            $('.societal').addClass('hidden')
            $('.indivigual').addClass('hidden')
        } else if (question2Answer === 'water') {
            $('.water').toggleClass('hidden')
            $('.land').addClass('hidden')
            $('.societal').addClass('hidden')
            $('.indivigual').addClass('hidden')
        } else if (question2Answer === 'societal') {
            $('.societal').toggleClass('hidden')
            $('.water').addClass('hidden')
            $('.land').addClass('hidden')
            $('.indivigual').addClass('hidden')
        } else {
            $('.indivigual').toggleClass('hidden')
            $('.water').addClass('hidden')
            $('.land').addClass('hidden')
            $('.societal').addClass('hidden')
        }
    })
}

ifHeCared.displayResults = function (question3Answer) {
    $('.cta3').on('click', function (event) {
        const question3Answer = $('input[name=question3]:checked').val()

        if (question3Answer === 'ProtectingForests') {
            $('.results').html('<p>jeff could save the amazon rainforest almost 3 times over find out more <a href="https://www.aljazeera.com/programmes/countingthecost/2019/09/amazon-rainforest-worth-190907121817405.html" target="_blank">more information here</a><p>')
        } else if (question3Answer === 'greenEnergy') {
            $('.results').html('<p>build enough solar farms to power over 36 million homes <a href="https://energycentral.com/c/gn/initial-steps-building-solar-farm" target="_blank"></a></p>')
        } else if (question3Answer === 'savingReef') {
            $('.results').html('<p>with Jeff Bezos\'s networth he could save the great berrior reef over 22 times <a href="https://www.abc.net.au/news/2016-08-11/great-barrier-reef-cost-to-save-reef-tops-8-billion-dollars/7721652" target="_blank">more information here</a></p>')
        } else if (question3Answer === 'trashIsland') {
            $('.results').html('<p>on saturday september 12th 2020) he could hire enough boats to clean out the pasific trash island many times <a href="https://www.logisticsmgmt.com/article/moore_on_pricing_the_cost_of_ocean_pollution" target="_blank">more information here</a><a href="https://www.nbcsandiego.com/news/local/study-shows-the-great-pacific-garbage-patch-is-growing/40612/" target="_blank"> or here </a></p>')
        } else if (question3Answer === 'sotialPrograms') {
            $('.results').html('<h3>jeff could fund Doctors without borders foor over 2 years <a href="https://www.doctorswithoutborders.ca/msf-2018-facts-and-figures" target="_blank">more information here</a></h3>')
        } else if (question3Answer === 'globalHunger') {
            $('.results').html('<h3>Jeff could sponser 8 and a half million refugee families of 4 <a href="https://www.agcrsi.org/getting-started/sponsorship-costs" target="_blank">more information here</a></h3>')
        } else if (question3Answer === 'homelessness') {
            $('.results').html('<p>With Jeff Bezozs\'s networth (on saturday september 12th 2020) he could end homelessness in the entire United States over 9 times <a href="https://www.huffingtonpost.ca/entry/homelessness-christmas-decorations_n_2276536?ri18n=true" target="_blank">more information here</a></p>')
        } else {
            $('.results').html('<p>If Jeff Bezos, decided to give every single employee of Amazon — some 876,000 people — a one-time pandemic bonus of $105,000 bonus. he would have roughly the same networth he had prier to Covid 19 <a href="https://the.ink/p/billionaire-wealth-just-got-wealthier" target="_blank">more information here</a></p>')
        }
    })
}


ifHeCared.init = function () {
    ifHeCared.answer1();
    ifHeCared.answer2();
    ifHeCared.displayResults();
}
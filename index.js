const primary_nav_btn = document.getElementById('primary_nav_btn')
const primary_nav_btn_close = document.getElementById('primary_nav_btn_close')
primary_nav_btn.addEventListener('click', () => {

    primary_nav_btn.classList.remove('visible')
    primary_nav_btn.classList.add('hidden')
    primary_nav_btn_close.classList.remove('hidden')
    primary_nav_btn_close.classList.add('visible')
    document.getElementById('the_nav').classList.contains('without_width_nav') && document.getElementById('the_nav').classList.remove('without_width_nav')
    document.getElementById('the_nav').classList.add('withwidth_nav')
    document.getElementById('nav_ul_primary').classList.remove('hidden')
    document.getElementById('nav_ul_primary').classList.add('visible')

})
primary_nav_btn_close.addEventListener('click', () => {
    primary_nav_btn.classList.add('visible')
    primary_nav_btn.classList.remove('hidden')
    primary_nav_btn_close.classList.remove('visible')
    primary_nav_btn_close.classList.add('hidden')
    document.getElementById('the_nav').classList.remove('withwidth_nav')
    document.getElementById('the_nav').classList.add('without_width_nav')
    document.getElementById('nav_ul_primary').classList.remove('visible')
    document.getElementById('nav_ul_primary').classList.add('hidden')
    document.getElementById('the_nav').style.width = ''
})
const dropdown_nav_btns = document.querySelectorAll('.nav_btn_dropdown')
dropdown_nav_btns.forEach((e, i) => e.addEventListener('click', () => {
    dropdown_nav_btns[i].parentElement
    const ddul = dropdown_nav_btns[i].parentElement.querySelector('ul')
    const ddsvg = e.querySelector('svg')
    if (ddul.classList.contains('hidden')) {
        ddul.classList.remove('hidden')
        ddul.classList.add('visible')
        ddsvg.classList.remove("bi-chevron-right")
        ddsvg.classList.add("bi-chevron-down")
    }
    else {
        ddul.classList.remove('visible')
        ddul.classList.add('hidden')

        ddsvg.classList.remove("bi-chevron-down")
        ddsvg.classList.add("bi-chevron-right")
    }
}))
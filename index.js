const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home-content`)
sr.reveal(`.header`)
sr.reveal(`.home`,{origin:'top'})

sr.reveal(`.profession-container`, {origin:'bottom'})
sr.reveal(`.skills-data`, {origin:'left'})
sr.reveal(`.skills-content`, {origin:'right'})

sr.reveal(`.about-img`, {origin:'left'})
sr.reveal(`.about-content`, {origin:'right'})



sr.reveal(`.contact h2`, {origin:'left'})
sr.reveal(`.box`, {interval: 100, origin:'right'})

sr.reveal(`.footer-text p`, {origin:'left'})
sr.reveal(`.footer-iconTop`, {origin:'right'})
sr.reveal(`.projects-card img`, {interval:100});
sr.reveal(`.heading lol-2`, {origin:'top'})
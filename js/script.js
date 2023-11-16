let elNewspaperList = document.querySelector('.newspaper__list')

const render = function(data, element) {
    data.forEach(row => {
        let newLi = document.createElement('li')
        let newLiImg = document.createElement('img')
        let newLiSection = document.createElement('div')
        let newNewspaperSectionHero = document.createElement('div')
        let newNewspaperSectionHeroHeading = document.createElement('span')
        let newNewspaperSectionHeroData = document.createElement('span')
        let newNewspaperSectionHeading = document.createElement('h3')
        let newNewspaperSectionText = document.createElement('p')
        let newNewspaperSectionBottom = document.createElement('div')
        let newNewspaperSectionBottomLeft = document.createElement('div')
        let newNewspaperSectionBottomLeftImg = document.createElement('img')
        let newNewspaperSectionBottomLeftHeading = document.createElement('p')
        let newNewspaperSectionBottomRight = document.createElement('div')
        let newNewspaperSectionBtn = document.createElement('button')
        let newNewspaperSectionBtnImg = document.createElement('img')
        let newNewspaperSectionBtnText = document.createElement('p')

        let newNewspaperSectionHour = document.createElement('div')
        let newNewspaperSectionHourImg = document.createElement('img')
        let newNewspaperSectionHourText = document.createElement('p')

        let newNewspaperSectionMassage = document.createElement('div')
        let newNewspaperSectionMassageImg = document.createElement('img')
        let newNewspaperSectionMassageText = document.createElement('p')

        let newNewspaperSectionIce = document.createElement('div')
        let newNewspaperSectionIceImg = document.createElement('img')
        let newNewspaperSectionIceText = document.createElement('p')


        newLi.setAttribute('class', 'newspaper__item')
        newLiImg.setAttribute('src', row.image)
        newLiImg.setAttribute('class', 'newspaper__images')
        newLiSection.setAttribute('class', 'newspaper__item-left')
        newNewspaperSectionHero.setAttribute('class', 'newspaper__item-left-hero')
        newNewspaperSectionHeroHeading.setAttribute('class', 'newspaper__item-left-hero-heading')
        newNewspaperSectionHeroData.setAttribute('class', 'newspaper__item-left-hero-date')
        newNewspaperSectionHeading.setAttribute('class', 'newspaper__item-left-heading')
        newNewspaperSectionText.setAttribute('class', 'newspaper__item-left-text')
        newNewspaperSectionBottom.setAttribute('class', 'newspaper__item-left-bottom')
        newNewspaperSectionBottomLeft.setAttribute('class', 'newspaper__item-left-bottom-left')
        newNewspaperSectionBottomLeftImg.setAttribute('class', 'newspaper__item-left-bottom-left-img')
        newNewspaperSectionBottomLeftHeading.setAttribute('class', 'newspaper__item-left-bottom-left-heading')
        newNewspaperSectionBottomRight.setAttribute('class', 'newspaper__item-left-bottom-right')
        newNewspaperSectionBtn.setAttribute('class', 'newspaper__item-btn')
        newNewspaperSectionBtnImg.setAttribute('class', 'newspaper__item-btn-img')
        newNewspaperSectionBtnImg.setAttribute('src', '../img/btnimg.png')
        newNewspaperSectionBtnText.setAttribute('class', 'newspaper__item-btn-text')
        newNewspaperSectionHour.setAttribute('class', 'newspaper__item-hour')
        newNewspaperSectionHourImg.setAttribute('class', 'newspaper__item-btn-img')
        newNewspaperSectionHourImg.setAttribute('src', '../img/data.png')
        newNewspaperSectionHourText.setAttribute('class', 'newspaper__item-btn-text')
        newNewspaperSectionMassage.setAttribute('class', 'newspaper__item-hour')
        newNewspaperSectionMassageImg.setAttribute('class', 'newspaper__item-btn-img')
        newNewspaperSectionMassageImg.setAttribute('src', '../img/massage.png')
        newNewspaperSectionMassageText.setAttribute('class', 'newspaper__item-btn-text')

        newNewspaperSectionIce.setAttribute('class', 'newspaper__item-hour')
        newNewspaperSectionIceImg.setAttribute('class', 'newspaper__item-btn-img')
        newNewspaperSectionIceImg.setAttribute('src', '../img/ice.png')
        newNewspaperSectionIceText.setAttribute('class', 'newspaper__item-btn-text')


        newNewspaperSectionBottomLeftImg.setAttribute('src', '../img/people.svg')
        newNewspaperSectionHeroHeading.textContent = 'VIZUAL DIZAYN'
        newNewspaperSectionHeroData.textContent = row.created_at
        newNewspaperSectionHeading.textContent = row.title
        newNewspaperSectionText.textContent = row.body
        newNewspaperSectionBottomLeftHeading.textContent = 'Akbarali Khasanov'
        newNewspaperSectionBtnText.textContent = "Keyinroq o'qish"
        newNewspaperSectionHourText.textContent = "3 daqiqa o'qish"
        newNewspaperSectionMassageText.textContent = "34"
        newNewspaperSectionIceText.textContent = "8.6K"

        element.appendChild(newLi);
        newLi.appendChild(newLiImg);
        newLi.appendChild(newLiSection);
        newLiSection.appendChild(newNewspaperSectionHero);
        newNewspaperSectionHero.appendChild(newNewspaperSectionHeroHeading);
        newNewspaperSectionHero.appendChild(newNewspaperSectionHeroData);
        newLiSection.appendChild(newNewspaperSectionHeading);
        newLiSection.appendChild(newNewspaperSectionText);
        newLiSection.appendChild(newNewspaperSectionBottom);
        newNewspaperSectionBottom.appendChild(newNewspaperSectionBottomLeft);
        newNewspaperSectionBottomLeft.appendChild(newNewspaperSectionBottomLeftImg);
        newNewspaperSectionBottomLeft.appendChild(newNewspaperSectionBottomLeftHeading);
        newNewspaperSectionBottom.appendChild(newNewspaperSectionBottomRight);
        newNewspaperSectionBottomRight.appendChild(newNewspaperSectionBtn);
        newNewspaperSectionBtn.appendChild(newNewspaperSectionBtnImg);
        newNewspaperSectionBtn.appendChild(newNewspaperSectionBtnText);

        newNewspaperSectionBottomRight.appendChild(newNewspaperSectionHour);
        newNewspaperSectionHour.appendChild(newNewspaperSectionHourImg);
        newNewspaperSectionHour.appendChild(newNewspaperSectionHourText);

        newNewspaperSectionBottomRight.appendChild(newNewspaperSectionMassage);
        newNewspaperSectionMassage.appendChild(newNewspaperSectionMassageImg);
        newNewspaperSectionMassage.appendChild(newNewspaperSectionMassageText);

        newNewspaperSectionBottomRight.appendChild(newNewspaperSectionIce);
        newNewspaperSectionIce.appendChild(newNewspaperSectionIceImg);
        newNewspaperSectionIce.appendChild(newNewspaperSectionIceText);
    });
}


render(data.posts, elNewspaperList)
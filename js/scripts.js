const displayContent = (e) => {
    const link = e.target,
          topic = link.id,
          content = document.getElementsByClassName(topic)[0];

    if (link.classList.contains('active')) {
        // topic is visible, so hide it
        link.classList.remove('active');
        document.getElementsByClassName(topic)[0].classList.remove('visible');
        // show default panel
        document.getElementById('default').classList.add('visible');
    } else {
        // topic is hidden, so show it
        document.getElementsByClassName('active')[0]?.classList.remove('active');
        document.getElementsByClassName('visible')[0]?.classList.remove('visible');
        link.classList.add('active');
        document.getElementsByClassName(topic)[0].classList.add('visible');
    }
}

const controls = document.getElementsByClassName('control');
Array.from(controls).forEach((control) => {
    control.addEventListener('click', displayContent);
});
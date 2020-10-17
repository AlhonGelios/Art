
const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.size-hit)').forEach(p => {
            p.style.dysplay = 'none';

        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        
        block.querySelectorAll('p:not(.size-hit)').forEach(p => {
            p.style.dysplay = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', (e) => {
            showImg(e.target.parentNode);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });

    });
};

export default pictureSize;
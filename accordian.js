document.querySelectorAll('.accordian__heading').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const item = question.parentElement;

    item.classList.toggle('active');
    question.setAttribute('aria-expanded', item.classList.contains('active'));
    
    if (item.classList.contains('active')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});
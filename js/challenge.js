document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = parseInt(counter.innerText);
  
    let timer = setInterval(() => {
      count++;
      counter.innerText = count;
    }, 1000);
  
    document.getElementById('plus').addEventListener('click', () => {
      count++;
      counter.innerText = count;
    });
  
    document.getElementById('minus').addEventListener('click', () => {
      count--;
      counter.innerText = count;
    });
  
    let likes = {};
    document.getElementById('heart').addEventListener('click', () => {
      if (likes[count]) {
        likes[count]++;
      } else {
        likes[count] = 1;
      }
  
      let likesList = document.querySelector('.likes');
      let li = document.createElement('li');
      li.innerText = `${count} has been liked ${likes[count]} times`;
      likesList.appendChild(li);
    });
  
    let isPaused = false;
    document.getElementById('pause').addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(timer);
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('pause').innerText = 'resume';
      } else {
        timer = setInterval(() => {
          count++;
          counter.innerText = count;
        }, 1000);
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('pause').innerText = 'pause';
      }
    });
  
    document.getElementById('submit').addEventListener('click', (event) => {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let comment = commentInput.value;
      let commentList = document.getElementById('list');
      let p = document.createElement('p');
      p.innerText = comment;
      commentList.appendChild(p);
      commentInput.value = '';
    });
  });
  
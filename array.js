const topMembers = [
  { rank: 1, name: 'JohnDoe', description: 'Booster Level: 100' },
  { rank: 2, name: 'JaneSmith', description: 'Booster Level: 90' },
  { rank: 3, name: 'FooBar', description: 'Booster Level: 85' },
  { rank: 4, name: 'Alice', description: 'Booster Level: 80' },
  { rank: 5, name: 'Bob', description: 'Booster Level: 75' }
];

const topList = document.querySelector('.top-list');

topMembers.forEach(member => {
  const item = document.createElement('div');
  item.classList.add('top-item');

  const rank = document.createElement('div');
  rank.classList.add('rank');
  rank.textContent = member.rank;
  item.appendChild(rank);

  const content = document.createElement('div');
  content.classList.add('item-content');
  
  const name = document.createElement('div');
  name.classList.add('item-name');
  name.textContent = member.name;
  content.appendChild(name);

  const description = document.createElement('div');
  description.classList.add('item-description');
  description.textContent = member.description;
  content.appendChild(description);

  item.appendChild(content);
  topList.appendChild(item);
});


// honor card background color

const honorCards = document.querySelectorAll(".honors-card");
const iconContainer = document.querySelectorAll(".fa-chevron-left");

for (var card in honorCards) {
  honorCards[card].classList.add(`card-${Number(card) + 1}`);
  iconContainer[card].classList.add(`card-${Number(card) + 1}`);
}

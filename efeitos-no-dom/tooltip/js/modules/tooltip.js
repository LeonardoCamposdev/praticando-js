export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");

function onMouseOver() {
  const tooltipBox = criartoolTipBox(this);

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener("mousemove", onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener("mouseleave",onMouseLeave)
}

const onMouseLeave = {
  handleEvent(){
    this.tooltipBox.remove();
    this.element.removeEventListener("mousemove", onMouseMove);
    this.element.removeEventListener("mouseleave", onMouseLeave);
  }
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  },
};

function criartoolTipBox(element) {
  const toolTipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  toolTipBox.classList.add("tooltip");
  toolTipBox.innerText = text;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

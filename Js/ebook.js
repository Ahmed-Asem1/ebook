const toolTipTrigger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const toolTipContent = [...toolTipTrigger].map(toolTipEl =>{
    new bootstrap.Tooltip(toolTipEl);
})


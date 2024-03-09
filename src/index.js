window.addEventListener('error', function (event)
{
    let errorText = document.createElement('div');
    errorText.style.cssText = 'background-color: red; color: white; padding: 10px; margin: 10px 0;';
    errorText.textContent = `Error: ${event.message} at ${event.filename}, line: ${event.lineno}`;
    document.body.prepend(errorText);
});
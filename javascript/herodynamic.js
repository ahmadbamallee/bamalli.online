
    document.addEventListener('DOMContentLoaded', function () {
        // Array of words/phrases to cycle through
        const words = [
            "[Programmer]",
            "[Front-End Developer]",
            "[Back-End Developer]",
            "[Web Developer]",
            "[App Developer]",
            "[Cyber-Analyst]",
            "[UXUI-Designer]",
        ];

        // Set the interval (in milliseconds) for changing the text
        const interval = 2000; // Change every 2 seconds

        let index = 0;

        function changeText() {
            document.getElementById('dynamicText').textContent = words[index];
            index = (index + 1) % words.length;
        }

        // Initial text change
        changeText();

        // Set interval to change text
        setInterval(changeText, interval);
    });

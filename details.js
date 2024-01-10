const details = {
  name: 'Mr.Trojan',
  owner: 'M Jibran Zada',
  bg: 'black',
  green: 'rgb(32, 400, 0)',
  dg: 'rgb(32, 200, 0)',
  lg: 'rgb(0, 255, 0)',
  red: 'rgb(255, 60, 0)',
  blue: 'rgb(0, 204, 204)',
  yellow: 'rgb(255, 255, 0)',
  font: 'Quicksand'
};

function replacePlaceholders() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        { acceptNode: node => (/\$[a-zA-Z]+/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) }
    );

    let currentNode;
    while ((currentNode = walker.nextNode())) {
        currentNode.nodeValue = currentNode.nodeValue.replace(/\$([a-zA-Z]+)/g, (match, p1) => {
            return details[p1.trim()] || match;
        });
    }

    // Update inline styles
    const elementsWithStyles = document.querySelectorAll('[style*="$"]');
    elementsWithStyles.forEach(element => {
        element.style.cssText = element.style.cssText.replace(/\$([a-zA-Z]+)/g, (match, p1) => {
            return details[p1.trim()] || match;
        });
    });
}

// Call the function to replace placeholders
replacePlaceholders();


// to use it in inline css then use data-style instead of style tag.

const styledetails = {
  name: 'Mr.Trojan',
  owner: 'M Jibran Zada',
  bg: 'black',
  green: 'rgb(32, 400, 0)',
  dg: 'rgb(32, 200, 0)',
  lg: 'rgb(0, 255, 0)',
  red: 'rgb(255, 60, 0)',
  blue: 'rgb(0, 204, 204)',
  yellow: 'rgb(255, 255, 0)',
  font: 'Quicksand'
};

function updateInlineStyles() {
    const elementsWithStyles = document.querySelectorAll('[data-style]');
    elementsWithStyles.forEach(element => {
        const styleData = element.getAttribute('data-style');
        const updatedStyle = styleData.replace(/\$([a-zA-Z]+)/g, (match, p1) => {
            return styledetails[p1.trim()] || match;
        });
        element.style.cssText = updatedStyle;
    });
}

// Call the function to update inline styles
updateInlineStyles();

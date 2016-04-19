walk(document.body);

// replace tab title as appropriate
document.title = document.title.replace(new RegExp("windows", "g"), "wandows");
document.title = document.title.replace(new RegExp("Windows", "g"), "Wandows");
document.title = document.title.replace(new RegExp("WINDOWS", "g"), "WANDOWS");

// code from walk and handleText functions credited to:
// http://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945

function walk(node){
	var child, next;

	switch ( node.nodeType ){
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ){
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode){
	var v = textNode.nodeValue;

	v = v.replace(/\bwindows\b/g, "wandows");
	v = v.replace(/\bWindows\b/g, "Wandows");
	v = v.replace(/\bWINDOWS\b/g, "WANDOWS");

	textNode.nodeValue = v;
}

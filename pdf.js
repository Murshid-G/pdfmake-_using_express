// playground requires you to assign document definition to a variable called dd

var dd = {
    
	content: [
	    
		{
			columns: [
         {
			image: 'sampleImage.jpg',
			fit: [100, 100]
	    },
	     {
			
			text: 'Scotic Design \n Inspection Report',
			style: 'header'
		},
				{
			text: 'Report\n Date',
			style: 'subheader'
		      }
		]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['To'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true
		},
		subheader: {
			fontSize: 15,
			bold: true
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 8
		}
	}
	
}
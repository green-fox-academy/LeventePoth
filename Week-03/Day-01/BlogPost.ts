// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked 

class BlogPost {
    authorName: string;   // a változói a classnak
    title: string;
    text: string;
    publicationDate: string;

// itt jönnek a class értékei:   // itt beadom neki hogy mivel dolgozzon
constructor (an: string, ti: string, te: string, pD: string) {    
    this.authorName = an;
    this.title = ti;
    this.text = te;
    this.publicationDate = pD;


let LoremIpsum = new BlogPost ('John Doe', 'LoremIpsum', 'Lorem ipsum dolor sit amet.', "2000.05.04."); //1 beadom neki a stringet



// authorName: 'John Doe';
// title: 'LoremIpsum';
// text: 'Lorem ipsum dolor sit amet.';
// publicationDate: "2000.05.04.";
// console.log();
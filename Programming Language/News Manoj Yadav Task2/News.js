
function addnews()
{ 
    
	const title = document.getElementById('title').value;
	const article=document.getElementById('article').value;
	const image=document.getElementById('image').value;

	// Validate the inputs
if (!title) {
	alert('Title is required!');
	return;
}

if (!article) {
	alert('Article description is required!');
	return;
}

const urlPattern = new RegExp('^(https?://)?([\\w-]+\\.)+[\\w-]+(/[^\\s]*)?$');
    if (image && !urlPattern.test(image)) {
        alert('Please enter a valid image URL!');
        return;}

	//create a new div
	const userdiv=document.createElement('div');
	 userdiv.classList.add('userarticle-card');

	 //add artical title

	 const articletitle=document.createElement('h3');
	 articletitle.textContent = title;
	 userdiv.appendChild(articletitle);

	 // add description 

	 const articledescription= document.createElement('p');
	 articledescription.textContent=article;
	 userdiv.appendChild(articledescription);

	 // add image
	 const articleimage=document.createElement('img')
	 articleimage.src=image;
	 userdiv.appendChild(articleimage)

	  // Append the new article to the user article container
	  document.getElementById('userarticle').appendChild(userdiv);

	 // Clear the input fields after adding the article
	  document.getElementById('title').value = '';
	  document.getElementById('article').value = '';
	  document.getElementById('image').value = '';

}


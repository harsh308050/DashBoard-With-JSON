fetch('Model/data.JSON')
  .then(response => response.json())
  .then(data => {
    const taskList = document.querySelector('.subDiv');
    const cardContainer = document.querySelector('.container');
    const sideHead = document.querySelector('.sideHead');
    const sideContentList =document.querySelector('.sideContentList')

    const tasks = data.tasks;

    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.className = 'taskHead';

      const taskTitleElement = document.createElement('h2');
      taskTitleElement.textContent = task.task_title;

      const taskDescriptionElement = document.createElement('p');
      taskDescriptionElement.textContent = task.task_description;

      taskElement.appendChild(taskTitleElement);
      taskElement.appendChild(taskDescriptionElement);

      taskList.appendChild(taskElement);




    
      const sidetaskHead = document.createElement('strong');
      sidetaskHead.textContent=task.task_title;
      sideHead.appendChild(sidetaskHead);  

      task.assets.forEach(asset => {

        const sideList = document.createElement('li');
        sideList.textContent = asset.asset_title;

        sideContentList.appendChild(sideList);  

        

        const card = document.createElement('div');
        card.className = 'card'; 

        const cardUpper = document.createElement('div');
        cardUpper.className = 'upper';
        
        const cardMiddle = document.createElement('div');
        cardMiddle.className = 'middle';
        
        const cardLower = document.createElement('div');
        cardLower.className = 'lower';
        
        const cardHead = document.createElement('div');
        cardHead.className = 'cardHead';
        
        const cardDescription = document.createElement('div');
        cardDescription.className = 'cardDescription';
        
        const cardContent = document.createElement('div');
        cardContent.className = 'cardContent';

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = asset.asset_title;

        const descriptionElement = document.createElement('strong');
        descriptionElement.textContent = 'Description: ';

        const cardDesc = document.createElement('span');
        cardDesc.textContent = asset.asset_description;


        cardHead.appendChild(cardTitle);
        cardDescription.appendChild(descriptionElement);
        cardDescription.appendChild(cardDesc);

        const lowerCardContent = document.createElement('div');
        lowerCardContent.className = 'lowerCardContent';
        if (asset.asset_content === " " && asset.asset_id === 18884) {
            lowerCardContent.innerHTML = `<div class="lowerCardContent">
          <div class="lowerContainer">
            <div class="lowerHead">
                <i class="fa-solid fa-angle-up"></i>
                <h2>Thread A</h2>
            </div>
              <div class="lowerSection">
                <div class="lower-sec-upper">
                    <div class="subThread">
                        <div class="upper-subThread">
                            <h2>Sub Thread 1</h2>
                        </div>
                        <div class="lower-subThread">
                            <textarea name="" id="" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>
                    <div class="subThread">
                        <div class="upper-subThread">
                            <h2>Sub Interpretation 1</h2>
                        </div>
                        <div class="lower-subThread">
                            <textarea name="" id="" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>
                </div>
                <div class="lower-sec-middle">
                    <div class="lower-sec-middle-icons">
                        <i class="fa-solid fa-lightbulb"></i>
                        <i class="fa-solid fa-message"></i>
                        <i class="fa-solid fa-circle-question"></i>
                        <i class="fa-brands fa-canadian-maple-leaf"></i>
                    </div>
                    <div class="lower-sec-middle-dropdowns">
                        <select name="Category" id="select1">
                            <option value="Select ">Select Category</option>
                            <option value="Category1">Category1</option>
                            <option value="Category2">Category2</option>
                        </select>
                        <select name="Category" id="select1">
                            <option value="Select ">Select Process</option>
                            <option value="Category1">Process1</option>
                            <option value="Category2">Process2</option>
                        </select>
                    </div>
                </div>
                <div class="lower-sec-lower">
                    <button class="btn"><i class="fa-brands fa-plus"></i> Sub-thread</button>
                    <div class="subThread">
                        <div class="upper-subThread">
                            <h2>Summary for Thread A</h2>
                        </div>
                        <div class="lower-subThread">
                            <textarea name="" id="" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>`;

      cardContent.appendChild(lowerCardContent);}
        else if (asset.asset_content === " " && asset.asset_id === 18885) {
            lowerCardContent.innerHTML = `<div class="lowerCardContent">
                        <div class="lowerCardContent-upper">
                            <div class="lowerContent-title">
                                <h2>Title</h2>
                            </div>
                            <div class="lowerContent-text">
                                <input type="text" class="lowerCard-input">
                            </div>
                        </div>

                        <div class="lowerCardContent-lower">
                            <div class="lowerContent-title">
                                <h2>Content</h2>
                            </div>
                            <div class="lowerCard-Editor">
                                <div class="btns">
                                    <div class="Editor-button-group1">
                                        <button>File</button>
                                        <button>Edit</button>
                                        <button>View</button>
                                        <button>Insert</button>
                                        <button>Format</button>
                                        <button>Tools</button>
                                        <button>Table</button>
                                        <button>Help</button>
                                    </div>
                                    <div class="Editor-button-group2">
                                        <button><i class="fa-solid fa-arrow-left"></i></button>
                                        <button><i class="fa-solid fa-arrow-right"></i></button>
                                        <button><i class="fa-solid fa-maximize"></i></button>
                                        <select name="paragraph" id="paragraph">
                                            <option value="Select ">Paragraph</option>
                                            <option value="paragraph1">Paragraph1</option>
                                            <option value="paragraph2">Paragraph2</option>
                                        </select>
                                        <button><i class="fa-solid fa-ellipsis"></i></button>
                                    </div>
                                </div>
                                <div class="Editor-body">
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    cardContent.appendChild(lowerCardContent);
        
        
        }
        else{
          const embed = document.createElement('embed');
          embed.src = asset.asset_content;
          cardContent.appendChild(embed);
        }

        cardUpper.appendChild(cardHead);
        cardMiddle.appendChild(cardDescription);
        cardLower.appendChild(cardContent);

        
        card.appendChild(cardUpper);
        card.appendChild(cardMiddle);
        card.appendChild(cardLower);
      
        cardContainer.appendChild(card);
      });
    });
  });


let toggleButton=document.querySelector('#toggle-btn');
let sideBar= document.querySelector('.sideCollapsed');

toggleButton.onclick=function() {
    sideBar.classList.toggle('active');
}
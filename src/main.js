const darkSwitchIcon = document.querySelector("#dark-switch-icon");
                        const darkSwitch = document.querySelector("#dark-switch")
                        const darkText = document.querySelector("#dark-text")
                        const darkChangeText = document.querySelector("#dark-text-change")
                        const html = document.documentElement;
                        let isDarkMode = false;

                        // Switch theme function
                        const toggleTheme = () => {
                            isDarkMode = !isDarkMode;
                            switchTheme()
                        }

                        const toDark = () => {
                            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
                            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
                            // darkChangeText.innerText = 'Dark'
                            darkSwitch.classList.remove('bg-slate-800')
                            darkSwitch.classList.add('bg-slate-100')
                            localStorage.setItem('data-theme', 'dark')
                            html.classList.add('dark')
                            darkText.classList.add('-translate-x-7')
                            darkText.innerText = 'ON'
                        }

                        const toLight = () => {
                            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
                            // darkChangeText.innerText = 'Light'
                            darkSwitch.classList.remove('bg-slate-100')
                            darkSwitch.classList.add('bg-slate-800')
                            localStorage.removeItem('data-theme')
                            html.classList.remove('dark')
                            darkText.classList.remove('-translate-x-7')
                            darkText.innerText = 'FF'
                            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
                            setTimeout(() => {
                                darkSwitchIcon.classList.remove('rotate-[360deg]')
                            }, 200)
                        }

                        const switchTheme = () => {
                            isDarkMode ? toDark() : toLight()
                            // or
                            // if (isDarkMode) {
                            //     toDark()
                            // } else {
                            //     toLight()
                            // }
                        }


                        // If you do reload the webpage,
                        // doesn't change you choose theme.
                        // This `dataTheme` function save permentaly choose theme.

                        const dataTheme = localStorage.getItem('data-theme')

                        dataTheme === 'dark' ? toDark() : toLight();
                        // or
                        // if(dataTheme === 'dark') {
                        //     toDark()
                        // } else {
                        //     toLight()
                        // }


let mainIcon = document.querySelectorAll ('.main-icon')
                let mainImg = document.querySelectorAll ('.main-img')
                mainIcon.forEach((icon,index) =>{
                    icon.addEventListener('click',()=>{
                        mainIcon.forEach((icon) =>{
                            icon.classList.remove("active-icon")
                        })
                        icon.classList.add("active-icon")

                        mainImg.forEach((img)=>img.classList.remove("active-img"))
                        mainImg[index].classList.add("active-img")
                    })
                }); 

                let programIcon = document.querySelectorAll ('.program-icon')
                let programContents = document.querySelectorAll ('.program-contents')

                    programIcon.forEach((pro,index) =>{
                        pro.addEventListener('click',() =>{
                            programIcon.forEach((pro)=>{
                                pro.classList.remove("active-program")
                            })
                            pro.classList.add("active-program")
                            programContents.forEach((code)=>code.classList.remove("active-code"))
                            programContents[index].classList.add("active-code")
                        })
                    });

                let coderTabs = document.querySelectorAll('.coder-tabs')
                let codeContent  = document.querySelectorAll('.code-content')

                        coderTabs.forEach((coder,index)=>{
                            coder.addEventListener('click',()=>{
                                coderTabs.forEach((coder) =>{
                                    
                                    coder.classList.remove("coder-active")
                                })
                                coder.classList.add("coder-active")
                                codeContent.forEach((singer)=>singer.classList.remove("active-code-content"))
                                codeContent[index].classList.add("active-code-content")
                            })
                        });
                        

                        let mobileClose = document.querySelector('.mobile-close')
                        let mobileSlide = document.querySelector('.mobile-slide')
                        let mobileOpen = document.querySelector('.mobile-open')

                        mobileOpen.addEventListener('click',()=>{
                            mobileSlide.classList.add('block')
                            mobileSlide.classList.remove('hidden')
                        })
                        mobileClose.addEventListener('click',()=>{
                            mobileSlide.classList.remove('block')
                            mobileSlide.classList.add('hidden')
                        });

                        

                        const accordionHeader = document.querySelectorAll('.accordion-header')
                        // const accordionBody = document.querySelectorAll('.accordion-body')
                        
                        accordionHeader.forEach(accordionHeader =>{
                            accordionHeader.addEventListener("click", event =>{
                                // console.log(accordionHeader)
                                    accordionHeader.classList.toggle("active")
                                    const accordionBody = accordionHeader.nextElementSibling
                                    if(accordionHeader.classList.contains("active"))
                                    {
                                        accordionBody.style.maxHeight = "100px"
                                        // console.log(accordionBody)
                                    }
                                    else
                                    {
                                        accordionBody.style.maxHeight = 0
                                    }
                            })
                        });
                        const dropDown = document.querySelectorAll('.dropdown')
                        const dropdownMenu = document.querySelectorAll('.dropdown-menu')

                         dropDown.forEach(dropDown =>{

                         })
                        
                       
                       
             

             

                            

                        const accordionBrain = document.querySelectorAll('.accordion-brain')
                        accordionBrain.forEach((accordionBrain)=>{
                            accordionBrain.addEventListener("click",event=>{
                                accordionBrain.classList.toggle("active-brain")
                                const accordionContent = accordionBrain.nextElementSibling
                                if(accordionBrain.classList.contains("active-brain"))
                                {
                                    accordionContent.style.maxHeight = "300px"
                                   
                                }
                                else 
                                {
                                    accordionContent.style.maxHeight = 0
                                    
                                }
                            })

                        })
                             

                    var swiper = new Swiper(".mySwiper", {
                        slidesPerView: 1,
                        spaceBetween:10,
                        loop: true,
                        speed:4000,
                        autoplay: {
                            delay:1,
                            
                        
                        },
                        breakpoints: {
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween:20,
                        },
                        "@0.75": {
                            slidesPerView:2,
                            spaceBetween:20,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween:10,
                        },
                        "@1.50": {
                            slidesPerView:3,
                            spaceBetween:46,
                        },
                        },
                    });
                    

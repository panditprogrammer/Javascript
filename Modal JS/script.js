let modal_btn = document.getElementById('modal_btn');
        let modal_bg = document.getElementById('modal_bg');
            let close_btn = document.getElementById('close');

        modal_btn.addEventListener('click',toggle_modal);


        // show the modal 
        function toggle_modal() {
            if(modal_bg.style.display === "flex")
            {
            modal_bg.style.display = 'none';
            }
            else
            {
            modal_bg.style.display = 'flex';
            }

        }
        // close the modal 
        close_btn.addEventListener('click',hide_modal);

        function hide_modal() {

            modal_bg.style.display = 'none';
        }
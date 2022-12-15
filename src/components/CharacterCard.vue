<template>
    <div class="characterCard" >
        <div class="StatsTable">
            <div tabindex="-1" class="row DEFENSE svelte-1ujofp1 exp">
                <svg focusable="false" viewBox="0 0 14 14"><path fill="currentColor" d="M13.442.726a.291.291 0 0 0-.175-.268C12.859.286 11.503 0 7 0S1.143.286.735.458a.291.291 0 0 0-.176.269v7.44a.868.868 0 0 0 .125.453c1.579 2.6 5.347 4.855 6.16 5.339a.292.292 0 0 0 .3 0c.79-.482 4.56-2.688 6.169-5.335a.868.868 0 0 0 .127-.455zM7 11.968c.059.013-3.56-2.017-4.824-4.368V1.565s0-.452 4.824-.452z"></path>
                </svg> 
                <div class="mid svelte-1ujofp1">
                    <span class="svelte-1ujofp1">DEF</span> 
                    <span class="sep svelte-1ujofp1"></span> 
                    <span class="svelte-1ujofp1">1,316</span>
                </div> 
                <div class="row small svelte-1ujofp1">
                    <div class="mid svelte-1ujofp1">
                        <span class="sep"></span> 
                        <span class="svelte-1ujofp1">702 
                            <span class="svelte-1ujofp1">+614</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

 
<script>

</script>


<style>
.characterCard {
    max-width: 500px;
    min-width: 1200px;;
    background-image: url("../assets/cryo_bg.png");
    background-size: cover;
    background-position: center right -210px;
    background-attachment: fixed; 
    position: relative;
    height: 75vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    margin:auto;
}


.row
.svelte-1ujofp1 {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.Card.svelte-ps463l * {
    box-sizing: border-box;
    text-size-adjust: none;
}

.StatsTable {
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.5em 3% 0 0;
    justify-content: space-between;
    flex-grow: 1;
    font-size: .9em;
}
</style>
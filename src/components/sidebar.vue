<template>
    <div class="sidebar">
        <ul class="sidebar-item">
            <ul class="projects">
                <li class="project-default">
                    <div class="project-default-icon" id="project-color-1">📬</div>
                    <p class="project-default-name">Inbox</p>
                </li>
                <li class="project-default">
                    <div class="project-default-icon" id="project-color-2">📌</div>
                    <p class="project-default-name">Today</p>
                </li>
                <li class="project-default">
                    <div class="project-default-icon" id="project-color-3">📆</div>
                    <p class="project-default-name">Upcoming</p>
                </li>
                <ul class="project" id="1">
                    <div class="project-color" id="color-icon-1"></div>
                    <p class="project-name">Code</p>
                </ul>
                <ul id="1" class="sub_projects">
                    <li class="sub_project">
                        <div class="sub_project-color" id="color-icon-2"></div>
                        <p class="sub_project-name" id="sub_project-name-1">Todo-Project</p>
                    </li>
                    <li class="sub_project">
                        <div class="sub_project-color" id="color-icon-3"></div>
                        <p class="sub_project-name" id="sub_project-name-2">CS50</p>
                    </li>
                    <li class="sub_project">
                        <div class="sub_project-color" id="color-icon-4"></div>
                        <p class="sub_project-name" id="sub_project-name-3">Micellaneous</p>
                      </li>
                </ul>
            </ul>
            <li class="settings">
                <div class="settings-icon">⚙</div>
                <p class="settings-name">Settings</p>      
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>
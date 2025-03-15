import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

const AnalyticIcon = (props: SvgProps) => {
  return (
    <Svg
      data-name="Layer 1"
      width={698.28353}
      height={608.57869}
      viewBox="0 0 698.28353 608.57869"
      {...props}
    >
      <Path
        d="M326.79 598.276a1.216 1.216 0 00.88-2.109l-.083-.331.033-.08a3.267 3.267 0 016.026.023c.986 2.373 2.24 4.75 2.55 7.26a9.664 9.664 0 01-.17 3.324 38.744 38.744 0 003.524-16.091 37.395 37.395 0 00-.232-4.172q-.192-1.704-.533-3.383a39.193 39.193 0 00-7.773-16.61 10.43 10.43 0 01-4.337-4.501 7.956 7.956 0 01-.724-2.174 9.819 9.819 0 00.637-3.386c.294-.447.821-.669 1.142-1.105 1.599-2.167 3.801-1.789 4.951 1.157 2.456 1.24 2.48 3.295.973 5.272-.959 1.258-1.09 2.96-1.932 4.307.087.11.177.218.263.329a39.446 39.446 0 014.117 6.523 16.398 16.398 0 01.98-7.617c.936-2.26 2.693-4.164 4.24-6.119a3.366 3.366 0 015.994 1.653l.01.086q-.345.195-.675.413a1.65 1.65 0 00.665 3.003l.034.005a16.417 16.417 0 01-.433 2.455c1.984 7.673-2.3 10.468-8.416 10.593-.135.07-.267.139-.402.205a40.263 40.263 0 012.168 10.199 38.188 38.188 0 01-.028 6.166l.01-.073a10.09 10.09 0 013.445-5.827c2.65-2.177 6.396-2.98 9.256-4.73a1.894 1.894 0 012.9 1.843l-.011.076a11.083 11.083 0 00-1.243.6q-.345.194-.675.412a1.65 1.65 0 00.666 3.003l.033.005.07.01a16.431 16.431 0 01-3.023 4.733c-1.24 6.698-6.57 7.334-12.27 5.383h-.003a40.25 40.25 0 01-2.704 7.894h-9.659c-.035-.108-.066-.218-.097-.326a10.975 10.975 0 002.673-.159c-.717-.88-1.433-1.766-2.15-2.645a.6.6 0 01-.045-.052c-.364-.45-.73-.897-1.094-1.347a16.075 16.075 0 01.47-4.095zM86.124 598.276a1.216 1.216 0 01-.881-2.109l.083-.331-.033-.08a3.267 3.267 0 00-6.026.023c-.985 2.373-2.24 4.75-2.549 7.26a9.664 9.664 0 00.17 3.324 38.744 38.744 0 01-3.524-16.091 37.395 37.395 0 01.232-4.172q.192-1.704.533-3.383a39.193 39.193 0 017.772-16.61 10.43 10.43 0 004.338-4.501 7.956 7.956 0 00.724-2.174 9.819 9.819 0 01-.637-3.386c-.295-.447-.822-.669-1.143-1.105-1.599-2.167-3.8-1.789-4.95 1.157-2.457 1.24-2.48 3.295-.974 5.272.96 1.258 1.091 2.96 1.932 4.307-.086.11-.176.218-.263.329a39.446 39.446 0 00-4.117 6.523 16.398 16.398 0 00-.979-7.617c-.937-2.26-2.693-4.164-4.24-6.119a3.366 3.366 0 00-5.995 1.653l-.01.086q.345.195.675.413a1.65 1.65 0 01-.665 3.003l-.033.005a16.417 16.417 0 00.432 2.455c-1.984 7.673 2.3 10.468 8.417 10.593.135.07.266.139.401.205a40.262 40.262 0 00-2.167 10.199 38.187 38.187 0 00.028 6.166l-.01-.073a10.09 10.09 0 00-3.445-5.827c-2.651-2.177-6.397-2.98-9.256-4.73a1.894 1.894 0 00-2.901 1.843l.012.076a11.084 11.084 0 011.243.6q.344.194.674.412a1.65 1.65 0 01-.665 3.003l-.034.005-.069.01a16.431 16.431 0 003.022 4.733c1.241 6.698 6.57 7.334 12.27 5.383h.003a40.251 40.251 0 002.704 7.894h9.66c.034-.108.065-.218.096-.326a10.975 10.975 0 01-2.672-.159c.716-.88 1.433-1.766 2.15-2.645a.599.599 0 00.045-.052c.363-.45.73-.897 1.094-1.347a16.075 16.075 0 00-.471-4.095z"
        fill="#f2f2f2"
      />
      <Path
        d="M232.106 79.267c1.955-3.934 5.078-7.2 6.989-11.157 1.91-3.956 2.282-9.25-.901-12.278-2.703-2.571-6.936-2.607-10.168-4.47-8.235-4.744-8.225-19.813-17.639-21.115-4.577-.633-8.719 2.8-11.486 6.5-2.767 3.702-4.971 8.021-8.808 10.596-4.344 2.915-9.96 3.042-14.783 5.067-9.248 3.882-14.096 13.865-18.15 23.038-2.612 5.91-5.283 12.285-4.071 18.631-2.634 1.639-1.46 6.047 1.169 7.693s5.93 1.61 8.95 2.323c6.344 1.5 11.54 6.55 14.003 12.586 1.92 4.705 2.312 9.871 2.682 14.94l1.928 26.38c.286 3.913.661 8.07 3.043 11.188 2.381 3.117 7.538 4.424 10.215 1.556 2.558-2.74 1.406-7.078 1.354-10.827-.051-3.749 3.337-8.416 6.532-6.455l1.127-2.557a40.333 40.333 0 0026.603-34.682c.816-12.444-4.136-25.787 1.411-36.957zM239.564 158.18a5.079 5.079 0 00-2.913-8.744l.012.423a8.733 8.733 0 01-4.53 1.19 13.72 13.72 0 00-4.662.739 3.929 3.929 0 00-2.586 3.615 3.816 3.816 0 002.058 2.865 11.27 11.27 0 003.499 1.063c3.134.59 6.802 1.036 9.122-1.152zM300.681 79.476a11.54 11.54 0 003.274-3.39 3.936 3.936 0 00-.256-4.44 5.273 5.273 0 00-3.568-1.29 27.757 27.757 0 00-10.515 1.24l10.452 9.26zM283.258 87.503c1.408 1.555.96 3.966.56 6.025-.398 2.059-.449 4.632 1.322 5.755 1.535.974 3.69.18 4.813-1.25a11.08 11.08 0 001.78-5.092 35.583 35.583 0 00.743-8.037 12.392 12.392 0 00-2.73-7.46 8.784 8.784 0 00-9.957-2.326l1.619-.08a15.802 15.802 0 00-2.633 5.053 5.367 5.367 0 001.33 5.284c.96.836 2.298 1.185 3.153 2.128zM362.678 61.436l.287-.887a6.067 6.067 0 00-2.73 7.134 6.63 6.63 0 002.443-6.247zM347.033 74.121a11.274 11.274 0 005.634-8.433 6.202 6.202 0 00-.365-3.22 3.328 3.328 0 00-2.424-2.002l-.655 1.032c-.94-.81-2.52.023-2.915 1.198a6.419 6.419 0 00.305 3.65 4.81 4.81 0 01-.057 3.622 13.02 13.02 0 01-1.774 1.863 1.857 1.857 0 00-.339 2.336c.617.705 1.77.409 2.59-.046zM340.362 68.358a6.136 6.136 0 00.764-3.31l-1.434-.45a6.122 6.122 0 00-2.368 1.713 1.866 1.866 0 103.038 2.047zM410.428 61.103c.13.109.259.22.388.33.115-.024.223-.067.34-.081zM408.13 73.684l3.95-3.194a6.584 6.584 0 001.754-1.844 4.46 4.46 0 00-.318-4.295 11.812 11.812 0 00-2.7-2.918 4.88 4.88 0 00-3.724 5.304c.237 1.51 1.185 3.124.411 4.442-.3.513-.82.862-1.166 1.345-.348.483-.46 1.253.017 1.608.53.394 1.263-.033 1.777-.448zM411.01 80.201a3.418 3.418 0 002.642-1.04 23.338 23.338 0 004.57-5.02l-8.885 2.815.923 1.08c-.82.534-.212 1.981.75 2.165zM419.31 86.297a2.27 2.27 0 002.343 1.43 3.39 3.39 0 002.416-1.546 4.502 4.502 0 00-3.539-7.025l.818 1.25c.208 2.132-2.69 3.85-2.039 5.89zM476.822 109.65a4.618 4.618 0 005.542-.014 4.943 4.943 0 00.295-7.243l-1.512.844a3.85 3.85 0 00-5.244 1.042 4.198 4.198 0 00.92 5.37zM494.41 111.64a4.48 4.48 0 003.072-3.122l-2.94-.386a6.51 6.51 0 00-2.779-1.214 2.232 2.232 0 00-2.421 1.427 2.415 2.415 0 00.824 2.207 4.48 4.48 0 004.244 1.088zM482.267 117.519a2.534 2.534 0 001.695 2.124 2.746 2.746 0 003.049-.473 1.683 1.683 0 00-.611-2.669l-2.205-.4c-.852-.442-1.942.458-1.928 1.418zM354.324 133.023l-1.706-1.558a5.587 5.587 0 001.706 1.558zM341.289 123.847c1.05 4.88 6.306 8.854 11.077 7.388l.252.23c-1.52-2.08-1.777-5.155-1.422-7.83a27.574 27.574 0 0115.906-21.193 6.563 6.563 0 002.985-1.945c.68-.994.426-2.7-.745-2.98a2.79 2.79 0 00-1.82.421l-8.865 4.364c-4.479 2.204-9.046 4.47-12.563 8.012s-5.856 8.653-4.805 13.533zM198.168 291.63a108.87 108.87 0 00-26.881-14.048c-5.883-2.092-12.205-3.687-18.335-2.5a21.824 21.824 0 00-15.44 12.325 22.857 22.857 0 00.747 19.812c2.827 5.297 7.722 9.516 9.359 15.293 1.103 3.894.58 8.04.05 12.054l-3.257 24.6c-.988 7.467-1.95 15.237.413 22.387 2.364 7.15 9.11 13.454 16.602 12.695l1.485-.112c-4.956-3.37-6.346-10.348-4.87-16.158 1.476-5.809 5.222-10.735 8.879-15.484l32.558-42.277c4.39-5.702 9.035-12.75 6.694-19.554-1.331-3.868-4.679-6.652-8.004-9.034zM124.207 256.004c-1.1-.372-2.26.455-2.907 1.42a19.48 19.48 0 01-1.833 2.947c-1.691 1.743-4.772 1.397-6.595-.207-1.824-1.603-2.614-4.082-2.968-6.484-.424-2.882-.24-6.098 1.661-8.304 1.958-2.272 5.177-2.881 8.139-3.353 3.059-.487 6.486-.894 8.992.927 1.58 1.147 2.5 2.997 3.962 4.289 1.462 1.292 4.063 1.781 5.164.17a3.965 3.965 0 00-.053-3.673 8.99 8.99 0 01-1.092-3.637c.074-1.77 1.496-3.178 2.952-4.19s3.098-1.886 4.053-3.38c1.174-1.837 1.05-4.204 1.778-6.259 1.763-4.974 8.055-7.187 9.888-12.136a4.679 4.679 0 00.14-3.281c-.767-1.971-2.841-1.584-2.968-3.994-.122-2.305 1.8-4.564 3.754-5.527 2.693-1.327 5.833-1.22 8.834-1.3 3.001-.08 6.235-.48 8.437-2.52a7.272 7.272 0 00-.773-10.818c-1.641-1.134-3.716-1.528-5.313-2.723-1.99-1.488-2.93-3.967-4.48-5.91a22.73 22.73 0 00-4.387-3.884l-3.988-2.96c-2.403-1.782-4.904-3.611-7.828-4.246-2.924-.636-6.407.263-7.871 2.873a8.878 8.878 0 00-.924 3.737 53.812 53.812 0 00.381 9.154l.724 7.328c.216 2.19-.016 5.078-2.142 5.646-4.716 1.26-3.125-5.712-4.17-7.849-1.602-3.27-8.958-4.84-12.102-6.203-1.964-.851-4.037-1.79-5.223-3.572-1.476-2.218-1.173-5.237-.016-7.636 1.158-2.4 3.044-4.353 4.757-6.393 1.746-2.08 3.336-4.284 4.925-6.487l5.527-7.664c2.362-3.276 4.846-7.275 3.504-11.085a2.982 2.982 0 00-5.457.658c-.589 2.057.98 4.683-.52 6.208a2.814 2.814 0 01-3.612-.068 8.203 8.203 0 01-2.158-3.264c-1.819-4.041-3.59-8.108-5.458-12.128-.59-1.27-1.206-3.446-2.994-3.232-1.553.186-2.392 2.449-2.338 3.762.079 1.911 1.135 3.62 1.943 5.353s1.372 3.817.485 5.512c-1.122 2.146-3.965 2.628-6.386 2.557a29.944 29.944 0 01-13.072-3.449l-.316 6.729-9.64-4.035-1.873-.784c-2.71-1.135-5.424-2.27-8.215-3.191-1.584-.523-3.19-.976-4.796-1.429l-2.928-.825a15.363 15.363 0 00-6.009-.857c-2.143.269-4.055 1.42-6.037 2.28-4.422 1.92-10.142-.01-14.881-.045a19.896 19.896 0 00-33.427.926 39.813 39.813 0 00-2.222 4.467l-1.93 4.323c-.943 2.114-1.907 4.341-1.721 6.649s1.954 4.664 4.269 4.643c-5.459 2.471-6.594 11.118-1.96 14.915 1.284 1.052 2.858 1.74 4.013 2.93a6.292 6.292 0 01-4.727 10.668 15.323 15.323 0 0018.214-5.705c1.982-3.102 2.843-6.979 5.54-9.486 3.57-3.32 9.466-3.063 13.584-.452s6.722 7.057 8.514 11.591c2.348 5.942 3.85 12.732 8.853 16.707 2.419 1.922 5.482 3.003 7.62 5.233 3.044 3.176 3.57 7.969 3.502 12.368-.068 4.399-.542 8.963 1.06 13.06s6.196 7.467 10.316 5.923a16.408 16.408 0 006.869 19.165l-2.252-13.965c3.74 1.053 6.165 4.681 7.566 8.306 1.4 3.625 2.14 7.545 4.169 10.859 3.196 5.218 8.983 7.467 14.87 7.447 6.36-.021 8.775-3.054 12.966-7.52a6.84 6.84 0 001.86-2.792 2.35 2.35 0 00-1.223-2.828zM142.215 255.773l-10.664-1.677 5.59 3.361a20.22 20.22 0 005.021 2.42 6.82 6.82 0 005.402-.57l-.455-.87c-.717-1.812-2.968-2.362-4.894-2.664zM139.8 275.533l.025-.062a2.087 2.087 0 00-2.12-.983 7.749 7.749 0 01-2.48.04 3.517 3.517 0 01-2.131-2.422c-.353-1.063-.458-2.2-.86-3.246a4.764 4.764 0 00-3.85-3.14 3.327 3.327 0 00-3.579 3.003 5.557 5.557 0 00.83 2.524l1.15 2.213a14.874 14.874 0 001.112 1.903 7.432 7.432 0 0011.903.17zM119.039 86.358c2.707 1.595 6.096 2.695 7.382 5.562l.742.24-2.428 3.017c-1 1.243-2.051 2.628-2.028 4.223.032 2.196 2.145 3.854 4.28 4.372a9.38 9.38 0 0010.845-6.392c.254-.927.359-1.887.582-2.821a22.941 22.941 0 012.905-6.243l21.564-36.278c.895-1.506 1.818-3.307 1.145-4.925a3.87 3.87 0 00-3.82-2.05 11.348 11.348 0 00-4.35 1.463 7.406 7.406 0 00-5.793-3.715 21.87 21.87 0 00-7.11.62 43.774 43.774 0 00-14.916 5.124c-2.528 1.278-5.31 2.856-6.044 5.592-.902 3.366 2.005 6.796 5.353 7.763 3.347.968 6.92.155 10.308-.659a7.8 7.8 0 01-13.038 7.36c-2.429-2.365-3.618-6.47-6.952-7.08-3.324-.608-5.966 2.937-6.7 6.235a17.718 17.718 0 008.073 18.592z"
        fill="#e6e6e6"
      />
      <Path
        d="M160.727 144.546a63.746 63.746 0 00-6.271-12.87 38.45 38.45 0 00-7.129-8.59 27.542 27.542 0 00-8.621-5.05c-3.065-1.108-6.477-1.656-9.576-.645-3.099 1.01-5.735 3.891-5.672 7.15.07 3.603 3.222 6.421 6.508 7.902s6.94 2.125 10.04 3.963a15.05 15.05 0 017.228 12.15l.78 1.29a15.604 15.604 0 00-4.87 2.652 5.297 5.297 0 00-1.85 4.977c.542 2.182 2.77 3.434 4.785 4.432l11.167 5.53c-1.895-5.65 4.31-10.91 4.653-16.86a15.589 15.589 0 00-1.172-6.031zM67.13 129.287c2.258 1.753 5.73.933 7.798-1.04 2.069-1.974 3.076-4.782 4.016-7.483a28.886 28.886 0 00.096 8.044 9.744 9.744 0 004.24 6.59 11.424 11.424 0 003.262 1.188 27.468 27.468 0 0015.937-1.139l.046-1.738c-2.553.291-4.485-2.509-4.654-5.073-.168-2.564.762-5.078.844-7.647s-1.156-5.569-3.685-6.026a4.888 4.888 0 01-6.217 6.707c-2.927-1.19-3.99-4.755-6.252-6.961a9.487 9.487 0 00-10.41-1.465 12.91 12.91 0 00-6.692 8.51c-.687 2.638-.483 5.86 1.67 7.533zM136.819 110.986l.104-.17c-.63-1.82-2.584-2.887-4.491-3.158a29.187 29.187 0 00-5.763.19 8.356 8.356 0 01-5.527-1.217c-1.312-.981-2.06-2.526-3.11-3.785-1.05-1.259-2.748-2.294-4.273-1.692-1.65.652-2.09 2.965-1.29 4.549a8.042 8.042 0 004.046 3.301 31.202 31.202 0 0020.304 1.982zM115.127 116.443a2.535 2.535 0 002.824 4.205l.557.55c.74-1.327 1.046-3.103.1-4.291a2.63 2.63 0 00-3.481-.464zM108.61 121.2a2.347 2.347 0 00-1.463-2.214 2.247 2.247 0 00-2.61 1.93 4.484 4.484 0 001.175 3.375 3.094 3.094 0 002.148 1.35c.873.028 1.763-.885 1.409-1.683l-1.333-.026a6.881 6.881 0 00.675-2.731zM82.552 107.554l1.468 1.19a17.602 17.602 0 002.734 1.941 7.492 7.492 0 005.573.682 5.736 5.736 0 003.922-3.87c.585-2.205-.37-4.494-1.303-6.575a3.99 3.99 0 00-1.027-1.565 1.368 1.368 0 00-1.73-.068 1.712 1.712 0 00-.28 1.645 4.484 4.484 0 01.271 1.713c-.093.576-.697 1.12-1.23.882l-.084 1.959c-2.54-1.286-3.885-4.708-6.713-5.045a3.49 3.49 0 00-3.485 5.122 7.011 7.011 0 001.884 1.989zM76.5 99.097a3.87 3.87 0 001.65-3.687 2.38 2.38 0 00-3.23-1.724 3.83 3.83 0 00-1.44 2.21l-2.009 5.666 1.126-.819a11.384 11.384 0 003.902-1.646zM89.543 87.504a2.215 2.215 0 00-.685-3.326l-1.407-.131a2.112 2.112 0 102.092 3.457zM102.49 89.676c1.314.628 2.976 1.227 4.119.325a2.597 2.597 0 00.795-2.475 6.294 6.294 0 00-1.161-2.446 23.5 23.5 0 00-6.535-6.31l-.635.824c-.887 2.303-1.744 4.992-.507 7.127.835 1.44 2.424 2.237 3.924 2.955zM112.274 91.726l2.456 1.11a2.303 2.303 0 00-2.456-1.11zM105.656 99.452l-1.16.383c-.987 1.621-.559 3.695-.1 5.537.29 1.164.916 2.597 2.115 2.544 1.166-.052 1.683-1.466 1.906-2.612a7.884 7.884 0 00.11-3.82 2.707 2.707 0 00-2.87-2.032zM87.15 93.995l.859.346a.924.924 0 10-.859-.346zM130.439 159.652a2.61 2.61 0 00-2.389 3.517c.844 1.816 3.748 1.824 5.038.293a3.952 3.952 0 00-1.019-5.722zM172.264 202.663a2.613 2.613 0 00-1.832 3.268l2.411.168 2.45-1.23a2.613 2.613 0 00-3.029-2.206zM162.465 205.645a4.983 4.983 0 00-2.089 4.361 3.986 3.986 0 003.119 3.524 3.332 3.332 0 003.765-2.553c.408-2.494-2.272-4.32-3.235-6.656zM256.1 189.176c.255 1.872-1.432 3.512-1.494 5.4-.075 2.24 2.364 3.983 4.595 3.764a7.266 7.266 0 005.22-3.834l.047-.21-3.26-3.685c-1.334-1.508-2.748-3.225-2.696-5.238.026-.992.417-1.954.395-2.946a7.14 7.14 0 00-.473-2.083c-.294-.878-.694-1.867-1.572-2.163-1.098-.371-2.206.602-2.73 1.636a6.472 6.472 0 00.191 6.095c.634 1.078 1.609 2.025 1.777 3.264zM245.854 195.762a1.872 1.872 0 001.561.1 8.17 8.17 0 002.747-.998 2.774 2.774 0 001.344-2.453 3.21 3.21 0 00-2.614-2.427 2.81 2.81 0 00-2.615.4c-.81.759-.713 2.048-.554 3.147l-.171.286c-.152.678-.25 1.522.302 1.945zM416.88 275.765l-.705-1.753c-.323.794-.203 1.606.705 1.753z"
        fill="#e6e6e6"
      />
      <Path
        d="M557.957 152.838c-3.016-3.272-4.863-5.158-6.768-9.214a14.93 14.93 0 00-11.297-8.484c-6.257-1.03-12.65.601-18.983.274-10.143-.524-19.29-5.964-29.003-8.931a121.366 121.366 0 00-16.576-3.419l-9.677-1.53c-10.573-1.672-21.213-3.35-31.916-3.127-3.086.064-7.385-.864-7.138-3.94.307-3.822 7.183-3.32 8.505-6.92.818-2.225-1.14-4.562-3.287-5.569-2.148-1.006-4.626-1.309-6.575-2.66-1.95-1.352-3.017-4.484-1.226-6.039l-14.894 7.636c-4.128 2.116-8.74 4.869-9.469 9.45a10.95 10.95 0 00-6.147 4.27c-2.793.015-4.988 2.696-5.448 5.45-.461 2.755.376 5.543 1.204 8.21-1.013-1.94-2.089-3.955-3.874-5.22-1.786-1.267-4.504-1.508-6.026.065-1.562 1.614-1.197 4.322-.092 6.277 1.105 1.956 2.803 3.534 3.845 5.523 3.257 6.214-2.644 14.961-9.625 14.27l1.405-19.249a12.881 12.881 0 00-.485-5.887c-.761-1.837-2.711-3.345-4.652-2.912-3.489.78-3.19 5.891-1.739 9.158 1.451 3.267 2.898 7.81-.065 9.812-1.913 1.292-4.507.494-6.572-.538-2.066-1.03-4.276-2.302-6.533-1.82-2.258.482-3.678 3.933-1.683 5.095l-9.925-1.724a7.06 7.06 0 01-8.834 5.635l-.974-4.037-1.452-.405c1.52.423-.858 6.832-2.99 11.727-2.865-.336-7.052-.4-7.53-1.221-2.288-3.932-2.017-13.298-5.992-15.51q-2.99-1.664-6.133-3.033a14.385 14.385 0 00-3.46-1.136c-2.441-.384-4.902.373-7.258 1.12-2.784.885-5.632 1.802-7.937 3.596a24.828 24.828 0 00-4.999 5.945L272.03 164.03a21.65 21.65 0 00-3.161 5.926 7.742 7.742 0 00.72 6.413 4.963 4.963 0 005.812 1.986c1.32-.57 2.64-1.865 3.947-1.267.99.452 1.238 1.753 1.134 2.837a7.578 7.578 0 00-.058 3.232c.595 1.687 2.884 2.274 4.517 1.544a6.982 6.982 0 003.318-4.04c1.573-4.035 1.413-8.5 1.804-12.812.392-4.313 1.57-8.926 4.971-11.608 1.018-.802 2.514-1.381 3.561-.618a2.546 2.546 0 01.626 2.89 11.319 11.319 0 01-1.697 2.666 14.613 14.613 0 00-2.403 11.406l.694.43c2.652-.688 6.2.543 9.72 1.724a12.651 12.651 0 00-6.428 4.422c-4.069 5.708-7.014 11.11-15.063 11.043-1.91-.016-3.802-.394-5.712-.398a7.467 7.467 0 00-5.297 1.764c-1.448 1.418-1.895 3.576-3.133 5.18-1.629 2.107-4.35 2.965-6.836 3.922-1.817.7-3.732 1.644-4.567 3.403a8.429 8.429 0 00-.35 4.506c.28 2.664.775 5.693 3.035 7.13a7.188 7.188 0 005.531.469c2.35-.572 4.65-1.649 7.063-1.488 3.79.253 6.91 3.89 6.948 7.688.02 1.922-.541 4.127.733 5.567 1.197 1.353 3.572 1.112 4.813-.202a5.545 5.545 0 001.045-5.09 16.373 16.373 0 00-2.398-4.83 5.637 5.637 0 016.487 2.998c.842 1.87.57 4.028.838 6.061.269 2.033 1.507 4.293 3.554 4.41a2.868 2.868 0 002.885-2.264 20.619 20.619 0 00-.169-3.087 3.954 3.954 0 013.994-3.68 5.636 5.636 0 001.381 7.038c1.559 1.205 3.618 1.475 5.56 1.812s4.01.87 5.263 2.39c2.087 2.533-.466 3.674-.864 5.819-.488 2.633 1.712 6.521 2.557 9.04l11.647 16.294a19.713 19.713 0 003.044 3.61c3.833 3.29 10.15 2.966 13.826-.5a11.853 11.853 0 002.013-13.94c-2.271-4.134-6.772-6.694-8.994-10.855a23.724 23.724 0 0013.023 5.356 65.666 65.666 0 0123.66 9.922 32.993 32.993 0 008.136 20.251 29.16 29.16 0 018.461-16.802c2.991-2.917 7.078-5.269 11.182-4.484 4.103.784 7.216 6.017 4.734 9.377l6.24.464q1.398 3.479 2.798 6.957a2.409 2.409 0 012.35-1.631c1.947.294 3.312 2.105 5.164 2.774 3.49 1.26 7.223-2.232 7.674-5.916.452-3.684-1.301-7.24-3.004-10.539a19.67 19.67 0 0020.213-29.846 50.091 50.091 0 0114.071-10.36c4.869-2.405 10.195-4.056 14.45-7.43 4.255-3.374 7.24-9.233 5.193-14.263-1.446-3.553-5.073-5.965-6.158-9.645-1.571-5.326 3.201-10.836 8.593-12.167 5.392-1.33 11.022.305 16.333 1.928-.816-5.465 5.519-10.588 10.692-8.647l6.5-2.633c-2.511 5.538-7.954 9.061-11.956 13.64-4.002 4.578-6.385 12.033-2.205 16.448l17.977-16.293 18.804-17.043-.898-2.638c5.93-2.252 12.317-4.115 17.989-6.913zM246.714 225.935a2.063 2.063 0 00.012 2.371 1.816 1.816 0 002.313.031 5.295 5.295 0 001.466-2.028 3.301 3.301 0 003.356 1.758 8.255 8.255 0 003.703-1.545 8.118 8.118 0 002.25-1.95 3.212 3.212 0 00.564-2.828 4.871 4.871 0 00-1.461-1.886l-4.757-4.394-.537-.161a3.03 3.03 0 00-4.372-.047c-.984 1.102-.989 2.749-.838 4.219s.384 3.037-.27 4.362c-.376.76-1.011 1.36-1.43 2.098z"
        fill="#e6e6e6"
      />
      <Path
        d="M338.709 275.965a33.063 33.063 0 01-25.125-25.254c-.584-2.91-.85-6.092-2.786-8.342-1.874-2.179-4.938-2.965-7.812-2.965-2.874 0-5.708.662-8.577.84-5.016.313-10.33-1.012-13.917-4.532-1.699-1.667-2.985-3.784-4.968-5.099-2.666-1.767-6.201-1.765-9.239-.764-3.384 1.115-6.092 4.167-9.792 3.747-3.848-.437-8.307-1.797-9.816 3.27-.434 1.458-.286 3.058-.836 4.478-.848 2.187-3.098 3.42-4.878 4.948-3.586 3.078-5.492 7.753-6.134 12.435-.642 4.681-.145 9.435.352 14.135.268 2.534.621 5.262 2.362 7.123 2.427 2.595 6.5 2.495 10.04 2.202l12.34-1.019c2.218-.183 4.745-.26 6.324 1.308.946.94 1.346 2.298 2.178 3.34a5.129 5.129 0 006.257 1.262 10.388 10.388 0 007.837 15.391l.317.2c-2.634 4.51-5.366 9.574-4.274 14.681.936 4.38 4.563 7.89 5.156 12.328.544 4.073-1.58 8.237-.64 12.237.951 4.05 5.042 6.874 9.191 7.175s8.227-1.54 11.441-4.18 5.7-6.045 8.149-9.408c1.512-2.077 3.063-4.239 3.582-6.755.552-2.677-.088-5.644 1.214-8.047 1.5-2.773 5.065-3.812 6.864-6.4 2.329-3.353.957-7.919 1.472-11.968 1.274-10.022 14.008-16.268 13.718-26.367zM336.87 310.18c-.348 1.564-1.813 2.595-3.21 3.382-1.396.788-2.931 1.583-3.643 3.02-.728 1.47-.395 3.224-.014 4.821q1.19 4.984 2.801 9.853a100.34 100.34 0 005.446-12.186 16.013 16.013 0 001.195-4.887 6.042 6.042 0 00-1.643-4.617zM422.56 292.75l-5.25-6.06c-1.196-1.382-2.56-2.857-4.373-3.087l-.747.476 4.551 10.837a10.29 10.29 0 002.749 4.323c1.358 1.067 3.56 1.272 4.692-.032a3.48 3.48 0 00.412-3.452 10.253 10.253 0 00-2.034-3.006zM439.514 296.617a5.03 5.03 0 002.974-2.772 14.91 14.91 0 001.064-4.038l.897-5.426-.391-.1a1.742 1.742 0 00-2.21.613 8.653 8.653 0 00-.989 2.311 2.8 2.8 0 01-1.599 1.838c-1.404.424-2.734-1.064-4.2-1.006a2.64 2.64 0 00-2.294 2.355 5.12 5.12 0 00.96 3.364c1.25 1.94 3.57 3.5 5.788 2.861zM449.188 300.046l4.032-10.62a10.358 10.358 0 00-4.032 10.62zM469.766 291.485l-.815.035a5.26 5.26 0 00-.045 4.657 10.496 10.496 0 003.042 3.698 21.37 21.37 0 006.711 3.747 42.707 42.707 0 0011.028 1.698l6.404.42c1.016.066 2.332-.063 2.614-1.042.234-.808-.455-1.568-1.098-2.111a40.239 40.239 0 00-19.79-8.982c-2.768-.421-5.704-.594-8.05-2.12zM492.552 319.67l-4.606-4.466c-1.493-1.448-3.73-2.982-5.44-1.8-.984.68-1.287 2.005-2.121 2.861a4.094 4.094 0 01-3.797.904 12.083 12.083 0 01-3.666-1.737l-3.81-2.364-3.943-2.447-2.967 2.883c.13-1.419-1.762-2.34-3.072-1.78a4.746 4.746 0 00-2.363 3.378 18.472 18.472 0 01-1.134 4.107c-1.506 2.883-5.163 3.737-8.38 4.22s-6.862 1.163-8.584 3.924c-1.434 2.299-1.005 5.25-.525 7.918l1.813 10.09a5.515 5.515 0 001.393 3.294c1.593 1.406 4.06.551 6.005-.306a40.601 40.601 0 0112.904-3.74 18.622 18.622 0 0112.785 3.274c2.306 1.756 4.064 4.186 6.507 5.745a12.907 12.907 0 0011.289.986 16.808 16.808 0 008.586-7.657 20.113 20.113 0 00-.434-19.91 39.477 39.477 0 00-6.44-7.377zM488.025 360.778a2.712 2.712 0 00-.172 3.216 4.443 4.443 0 002.838 1.827 13.19 13.19 0 003.451.158l.036-.861a8.842 8.842 0 00-2.022-4.074c-1.112-1.057-3.077-1.381-4.13-.266zM527.557 361.699l-.55-.202-3.93 5.923c-.704 1.063-1.44 2.339-1.01 3.539.509 1.42 2.39 1.837 3.852 1.461a6.077 6.077 0 004.394-4.823 5.967 5.967 0 00-2.756-5.898zM537.544 355.433l-3.617-2.875-.145 4.001-.135.002a26.564 26.564 0 012.357 2.345c.846.72 2.267 1.048 2.99.205a1.892 1.892 0 00.078-2.087 5.552 5.552 0 00-1.528-1.591zM472.21 230.353c-1.518-.047-3.198-.14-4.374.82a5.867 5.867 0 00-1.009 1.177l-.414.58a15.955 15.955 0 00-1.616 2.599 3.427 3.427 0 00-.22 2.834 1.643 1.643 0 002.425.696c.649-.6.498-1.69.988-2.426a2.267 2.267 0 011.826-.873 12.007 12.007 0 012.085.235 10.06 10.06 0 009.845-15.378l-.122-.373a4.493 4.493 0 00-4.558 3.513c-.34 1.768.38 3.822-.691 5.269-.904 1.22-2.648 1.375-4.166 1.327zM485.793 211.609l-.23-.02a11.73 11.73 0 00-3.85 1.434 1.783 1.783 0 00-.876.889 1.294 1.294 0 00.306 1.19 3.817 3.817 0 001.02.768 6.074 6.074 0 001.855.83 2.059 2.059 0 001.893-.49 2.735 2.735 0 00.444-2.266 11.92 11.92 0 00-.562-2.335zM462.404 230.804a5.845 5.845 0 00.761-1.892l.425-1.562-1.513-.919a8.76 8.76 0 00-1.98 1.412 2.954 2.954 0 00-.908 2.188 1.806 1.806 0 001.485 1.685 1.984 1.984 0 001.73-.912zM297.618 90.14c-.598.373-.429 1.274-.186 1.936l.836 2.28.39-1.476a3.134 3.134 0 00.43-1.902c-.134-.648-.908-1.188-1.47-.838z"
        fill="#e6e6e6"
      />
      <Path
        d="M675.284 227h-253a23.026 23.026 0 01-23-23V23a23.026 23.026 0 0123-23h253a23.026 23.026 0 0123 23v181a23.026 23.026 0 01-23 23z"
        fill="#fff"
      />
      <Path
        d="M675.284 227h-253a23.026 23.026 0 01-23-23V23a23.026 23.026 0 0123-23h253a23.026 23.026 0 0123 23v181a23.026 23.026 0 01-23 23zm-253-225a21.024 21.024 0 00-21 21v181a21.024 21.024 0 0021 21h253a21.024 21.024 0 0021-21V23a21.024 21.024 0 00-21-21z"
        fill="#3f3d56"
      />
      <Path
        d="M491.118 27.56h-40a4 4 0 010-8h40a4 4 0 010 8zM578.118 117.56h-127a4 4 0 010-8h127a4 4 0 110 8z"
        fill="#ccc"
      />
      <Circle cx={473.61424} cy={65.48819} r={26.8189} fill="#559ff3" />
      <Path
        fill="#3f3d56"
        d="M447.11838 193.94675H453.11838V195.94675H447.11838z"
      />
      <Path
        d="M629.287 195.947h-12.584v-2h12.584zm-25.167 0h-12.584v-2h12.584zm-25.167 0h-12.584v-2h12.584zm-25.167 0h-12.583v-2h12.583zm-25.167 0h-12.583v-2h12.583zm-25.167 0H490.87v-2h12.583zm-25.167 0h-12.583v-2h12.583z"
        fill="#3f3d56"
      />
      <Path
        fill="#3f3d56"
        d="M641.87033 193.94675H647.87033V195.94675H641.87033z"
      />
      <Path
        fill="#559ff3"
        d="M543.95676 158.55906H548.95676V192.55906H543.95676z"
      />
      <Path
        fill="#559ff3"
        d="M594.95676 158.55906H599.95676V192.55906H594.95676z"
      />
      <Path
        fill="#559ff3"
        d="M619.95676 177.55906H624.95676V192.55906H619.95676z"
      />
      <Path
        fill="#559ff3"
        d="M568.95676 143.55906H573.95676V192.55906H568.95676z"
      />
      <Circle cx={89.95676} cy={220.55906} r={6} fill="#559ff3" />
      <Circle cx={105.95676} cy={191.55906} r={6} fill="#559ff3" />
      <Circle cx={281.95676} cy={168.55906} r={6} fill="#559ff3" />
      <Path
        fill="#ffb6b6"
        d="M144.231 597.467L153.281 597.466 157.586 562.559 144.229 562.56 144.231 597.467z"
      />
      <Path
        d="M143.912 606.907h27.83v-.352a10.833 10.833 0 00-10.832-10.832l-5.084-3.857-9.485 3.857h-2.43z"
        fill="#2f2e41"
      />
      <Path
        fill="#ffb6b6"
        d="M212.231 597.467L221.281 597.466 225.586 562.559 212.229 562.56 212.231 597.467z"
      />
      <Path
        d="M211.912 606.907h27.83v-.352a10.833 10.833 0 00-10.832-10.832l-5.084-3.857-9.485 3.857h-2.43z"
        fill="#2f2e41"
      />
      <Path
        d="M143.88 313.506l16.06-2.3c5.432 9.082 7.362 33.258 7.362 33.258l15.718 37.358a7.163 7.163 0 11-11.167 5.38l-25.807-43.484z"
        fill="#ffb6b6"
      />
      <Path
        d="M152.584 268.918a17.118 17.118 0 00-13.523 22.612l3.408 9.66s-4.293 29.087 2.782 37.298l21.712-1.966s-3.97-14.675-.922-21.775c1.866-4.348 1.762-19.367-.077-31.584-1.404-9.329-4.057-15.689-13.38-14.245z"
        fill="#3f3d56"
      />
      <Path
        d="M227.457 356.56s16.735 16.32 13.16 20.09-11.748 9.05-4.16 9.91 10.735 2.723 4.16 4.291-5.557 5.594-5.557 5.594 9.897 47.114 2.397 78.114c0 0-4.174 84.672-6.794 91.266s-3.619 2.594-2.619 6.594 3-3 1 4a92.518 92.518 0 00-2.587 11.14l-19.563-3s-3.15-9.927 0-12.534 5.975-1 2.563-6.803-4.413 2.197-3.413-5.803-3.175-51.268 3.413-74.134l-12.174-64.163-19.326 66.437s-10.252 81.14-13.582 84-8.33-2.14-3.33 2.86 4.912 4.14 5 5c.93 9.172-27.7-.86-27.7-.86a51.364 51.364 0 000-7c-.3-2.14 3.302-2.825 0-4.982s1.612-.018 1.612-.018 7.383-59.86 13-78l6.5-88.337s.412 1.763 0-2.52-3.413-1.283-.413-4.283 5-4.529 3-6.764-7.517-6.759-4.259-9.498 9.672-20.598 9.672-20.598l62.5.5"
        fill="#2f2e41"
      />
      <Path
        d="M203.958 257.385l-11.27-12.689-17.807 1.979-11.4 15.954a24.34 24.34 0 00-18.528 27.88c4.424 25.475 19.459 50.183 14.494 62.752-7.536 19.08-7.996 26.862 10.043 24.187s78.474-8.842 66.757-20.559-14.29-31.296-14.29-31.296l-.47-44.795a19.909 19.909 0 00-17.53-23.413z"
        fill="#3f3d56"
      />
      <Path
        d="M200.88 306.506l16.06-2.3c5.432 9.082 7.362 33.258 7.362 33.258l15.718 37.358a7.163 7.163 0 11-11.167 5.38l-25.807-43.484z"
        fill="#ffb6b6"
      />
      <Path
        d="M209.584 261.918a17.118 17.118 0 00-13.523 22.612l3.408 9.66s-4.293 29.087 2.782 37.298l21.712-1.966s-3.97-14.675-.922-21.775c1.866-4.348 1.762-19.367-.077-31.584-1.404-9.329-4.057-15.689-13.38-14.245z"
        fill="#3f3d56"
      />
      <Circle cx={178.8882} cy={222.08022} r={21.52319} fill="#ffb6b6" />
      <Path
        d="M174.93 243.15c5.994-1.502 6.198-3.215 12.193-4.717 1.908-.478 4.12-1.232 4.686-3.116a4.54 4.54 0 00-1.078-3.901 36.899 36.899 0 01-2.65-3.257 6.537 6.537 0 014.512-9.792c1.854-.317 3.766.174 5.632-.063 2.56-.326 6.324-9.822 4.684-11.813-1.598-1.939-4.22-3.095-5.1-5.447-.576-1.538-.26-3.259-.518-4.881-.38-2.406-5.248 4.255-4.6 1.907 1.59-5.759-25.304-6.666-28.104.723-1.046 2.761-3.879 3.2-6.058 5.193-1.428 1.307-4.843 5.487-5.339 7.74a16.332 16.332 0 00.232 6.863c2.234 10.526 5.925 19.855 15.751 24.24"
        fill="#2f2e41"
      />
      <Path
        d="M5.202 608.271l389.725.308a1.19 1.19 0 100-2.382L5.202 605.89a1.19 1.19 0 100 2.381z"
        fill="#cacaca"
      />
    </Svg>
  );
};

export default AnalyticIcon;

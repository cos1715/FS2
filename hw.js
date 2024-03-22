// greeting;
{
  const str = prompt("Enter your name");
  console.log(str);
}

// gopni4ek
{
  const str = prompt("Enter text");
  const transformedText = str.split(",").join("блін,");
  console.log(transformedText);
}

// capitalize
{
  const str = "cANBerRa";
  const firstLetter = str[0].toUpperCase();
  const restWord = str.slice(1).toLowerCase();

  console.log(`${firstLetter}${restWord}`);
}

// word count
{
  const str = prompt("Enter text");
  console.log(str.trim().split(" ").length);
}

// credentials
{
  const firstName = prompt("Enter your first name").trim();
  const lastName = prompt("Enter your last name").trim();
  const patronimName = prompt("Enter your patronim name").trim();

  const transformedFirstName = `${firstName[0].toUpperCase()} ${firstName
    .slice(1)
    .toLowerCase()}`;
  const transformedLastName = `${lastName[0].toUpperCase()} ${lastName
    .slice(1)
    .toLowerCase()}`;
  const transformedPatronimName = `${patronimName[0].toUpperCase()} ${patronimName
    .slice(1)
    .toLowerCase()}`;

  console.log(
    `${transformedLastName} ${transformedFirstName} ${transformedPatronimName}`
  );
}

// beer

{
  const str = "Було жарко. Василь пив пиво вприкуску з креветками";
  const transformedText = str.replaceAll(/пиво/g, "чай");
  console.log(transformedText);
}

// no tag
{
  const str = "якийсь текст, в якому є один тег <br /> і всяке інше";
  const startIndex = str.indexOf("<");
  const endIndex = str.indexOf(">");
  const firstHalf = str.slice(0, startIndex);
  const secondHalf = str.slice(endIndex + 1);

  console.log(`${firstHalf}${secondHalf}`);
}

// big tag
{
  const str = "якийсь текст, в якому є один тег <br /> і всяке інше";
  const startIndex = str.indexOf("<");
  const endIndex = str.indexOf(">");
  const firstHalf = str.slice(0, startIndex);
  const secondHalf = str.slice(endIndex + 1);
  const tag = str.slice(startIndex, endIndex + 1).toUpperCase();

  console.log(`${firstHalf}${tag}${secondHalf}`);
}

// new line
{
  const str = prompt("Enter text");
  const arr = str.split("\\n");
  const transformedText = arr.join("\n");

  console.log(transformedText);
}

// youtube
{
  const regex =
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
  const link = prompt("Enter youtube link");
  const result = link.match(regex);
  const id = result[1];
  const video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=Nk_CZTE3z3VlpW1i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  document.write(video);
}

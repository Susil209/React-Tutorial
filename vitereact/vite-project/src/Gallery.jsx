export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1 style={{color: "green"}}>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

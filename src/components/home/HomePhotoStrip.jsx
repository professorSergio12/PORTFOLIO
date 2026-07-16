import './HomePhotoStrip.css'

export default function HomePhotoStrip({ photos }) {
  if (!photos?.length) return null

  const track = [...photos, ...photos]

  return (
    <section className="home-photo-strip" aria-hidden="true">
      <div className="home-photo-strip__track">
        {track.map((photo, index) => (
          <div key={`${photo}-${index}`} className="home-photo-strip__frame">
            <img src={photo} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Error({ error }) {
  return (
    <section>
      <span>Error encountered: {error.message}</span>
    </section>
  );
}

export default Error;

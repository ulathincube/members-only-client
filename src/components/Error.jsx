function Error({ error }) {
  console.log({ error });
  return (
    <section>
      <span>Error encountered: {error.message}</span>
    </section>
  );
}

export default Error;

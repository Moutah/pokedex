# Take charge of your discovery

Well that's nice and all but all we're seeing are question marks! That is because you haven't discovered any species as
a trainer yet. To identify a species, we'll need to send a picture of a Pokemon so the AI can analyse it and tell us
what species it is.

To do so, we'll need a dialog with an input to upload and then send our image.

## 1. The dialog

First, create the dialog component. Keep it minimal for now as we just need to ensure we can open it.

## 2. The button

In the location of your choosing, add a primary button with a `click` binding that will open our previously created
dialog component.

## 3. The controls

Now that we can open the dialog, fill its template with suitable controls for a dialog (cancel and confirm buttons and
close icon). Again keep it simple for now as we just want to assess it is working.

> 🟢 Validate the modal controls with :
> ```shell
> npm run test -- modal-is-working
> ```

## 4. The input

Time to setup the input so that we can upload our image! Fill the dialog content to have a nice form to submit an image.

> 🟢 Validate the input with :
> ```shell
> npm run test -- modal-has input
> ```

## 5. The submit

Finally, plug the "confirm" control button to a method that will send the image to the API for identification.

> 💡 The API call for this is `POST /identify`.

> 🟢 Validate the implementation with :
> ```shell
> npm run test -- modal-can-submit-image
> ```

Note that, as detailed on the API's documentation, the AI is not fully ready. So to identify a species, make sure to
name the uploaded image with the name of the species you want to discover, for example "pikachu.jpg". Lookup the list of
Pokemonspecies on [Wikipedia](https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon) (only generation I
species arerecognizable).

## 6. The loading

In case of success, the API will respond with the identified species. But make sure that during the wait something is
informing the user about the ongoing call. And once it is complete, the dialog must close automatically and the
identified species must be visible in the list.

> 🟢 Validate the display of newly identified species with :
> ```shell
> npm run test -- modal-can-identify
> ```
